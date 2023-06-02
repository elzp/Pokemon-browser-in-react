import * as React from 'react';
import Button from './Button';
interface ability {
  name: string,
  url: string,
  description: string,
}

export default function Card(props: any) {
  const countOfAbilities = props.listOfAbilities.length;
  const defaultShowStatus = [...Array(countOfAbilities)].map(item=>false);
  const [show, setShow]=React.useState(defaultShowStatus);

  const closetooltip = (index: number) => {
    setShow((prev)=>{
    const newValue = prev.map((item,index2)=>{if(index===index2){return false}else{return item}});
   
    return newValue;
  })}

  return (
    <div className="card">
      <div>
        <span>{props.name}</span>
      </div>
      <div className="flexed">
      <div className="img">
        <img src={props.img_url} alt="Image is not provided" />
      </div>
      {props.listOfAbilities?.map((ability: ability, index: number) => {
        return (
          <div key={ability.name + index} className='ability'>
            <div 
            className='ability-name'
             onMouseOver={()=>{console.log('onMouseOver');
             setShow((prev)=>{
              const newValue = prev.map((item,index2)=>{if(index===index2){return true}else{return item}});
              
              return newValue;
             });
             console.log(show)
            }}>{ability.name}</div>
            {show[index] &&(
            <div className="ability-description"><div
            className="pokedex_closebutton description_closebutton"
            onClick={() => closetooltip(index)}
          ></div>
          {ability.description}</div>
            )}
          </div>
        );
      })}
      </div>
      <div className="to-bottom">
        <Button  
          onClickFn={(e: Event) => {
            props.doWhenClicked();
          }}
          name={props.textOfButton}
        />
      </div>
    </div>
  );
}

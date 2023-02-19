import * as React from 'react';
import Button from './Button';

export default function Card(props) {
  // const [abilitiesDetails, setAbilitiesDetails] = React.useState(se);

  // async function getAbilitiesDetails(url) {
  //   let detail = '';
  //   await fetch(url).then((response) => {
  //     detail = response['effect_entries'].filter(
  //       (item) => item.language.name === 'en'
  //     )?.['short_effect'];
  //   });
  //   return detail;
  // }
  // React.useEffect(() => {
  //   props.listOfAbilities.forEach((item) => {
  //     setAbilitiesDetails((prev) => [...prev, getAbilitiesDetails(item[1])]);
  //   });
  // }, [props.listOfAbilities]);
  return (
    <div className="card">
      <Button
        onClickFn={(e) => {
          props.doWhenClicked();
        }}
        name={props.textOfButton}
      />
      <div className="img">
        <img src={props.img_url} alt="Image is not provided" />
      </div>
      <div>
        <span>{props.name}</span>
      </div>
      {props.listOfAbilities?.map((ability, index) => {
        return (
          <div key={ability.name + index}>
            {/* {JSON.stringify(ability)} */}
            cos
            {JSON.stringify(ability.name)}
            {JSON.stringify(ability.description)}
          </div>
        );
      })}
    </div>
  );
}

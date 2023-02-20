import * as React from 'react';

export default function Abilities(props) {
  const { ability, index } = props;
  return (
    <div key={ability.name + index}>
      <div>{ability.name}</div>
      <div className="description">{ability.description}</div>
    </div>
  );
}

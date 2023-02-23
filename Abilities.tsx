import * as React from 'react';
import useHover from './hooks';
import { LegacyRef } from 'react';

export default function Abilities(props) {
  const { ability, index } = props;
  const {
    ref: hoverRef,
    value: isHovered,
  }: { ref: LegacyRef<HTMLDivElement>; value: boolean } = useHover();
  return (
    <div key={ability.name + index} className="ability">
      <div ref={hoverRef} className="ability-name">
        {ability.name}
      </div>
      {isHovered && (
        <div className="ability-description">{ability.description}</div>
      )}
    </div>
  );
}

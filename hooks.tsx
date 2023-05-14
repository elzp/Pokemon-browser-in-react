import {
  useRef,
  useState,
  useEffect,
  LegacyRef,
  Dispatch,
  SetStateAction,
} from 'react';

export default function useHover() {
  const [value, setValue]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);
  const ref: LegacyRef<HTMLDivElement> = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return { ref, value };
}

//from https://usehooks.com/useHover/

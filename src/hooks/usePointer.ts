import { useState, RefObject, useEffect } from 'react';

export default function usePointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const onMovePointer = ({ clientX, clientY }: MouseEvent) => {
      if (!ref.current) return;
      const element = ref.current;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;

      setPoint({ x, y });
    };

    window.addEventListener('pointermove', onMovePointer);

    return () => window.removeEventListener('pointermove', onMovePointer);
  }, []);

  return point;
}

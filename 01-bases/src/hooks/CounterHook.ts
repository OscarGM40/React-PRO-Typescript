import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

// const MAXIMUM_COUNT = 10;


export const useCounter = (initialValue: number, MAXIMUM_COUNT: number = 10) => {

  const [counter, setCounter] = useState<number>(initialValue);
  const elementToAnimate = useRef<any>(null);
  const timeline = useRef(gsap.timeline());

  /* functions */
  const handleClick = (value: number) => {
    setCounter((counter) =>
      counter + value >= MAXIMUM_COUNT ? MAXIMUM_COUNT : counter + value
    );
  };

  useLayoutEffect(() => {
    timeline.current
    .to(elementToAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" })
    .to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" });
    timeline.current.pause();
  }, [])


  useEffect(() => {
    if (counter >= MAXIMUM_COUNT) {
      console.log(
        "%cSe llegó al valor máximo",
        "color: red;background: yellow;"
      );
    }
    timeline.current.play(0);
      return () => { };
    }, [counter, MAXIMUM_COUNT]);

  return {
    counter,
    elementToAnimate,
    handleClick
  }
};

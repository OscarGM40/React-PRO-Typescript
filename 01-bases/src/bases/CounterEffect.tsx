import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

const CounterEffect = () => {
  /* states */
  const [counter, setCounter] = useState<number>(5);
  
  /* refs */
  const counterElement = useRef<HTMLHeadingElement>(null);
  /* functions */
  const handleClick = (value: number) => {
    
    setCounter((counter) => counter + value >= MAXIMUM_COUNT
     ? MAXIMUM_COUNT : counter + value);
  };

  /* dado que voy a interactuar con un h2,pues lo voy a animar es recomendable usar useLayoutEffect y asegurarme que se cargó el 100% del DOM y por ende esa tag <h2> existirá. */
  useLayoutEffect(() => {
    if (counter >= MAXIMUM_COUNT) {
      console.log(
        "%cSe llegó al valor máximo",
        "color: red;background: yellow;"
      );
     
      const timeline = gsap.timeline();

      timeline
        .to(counterElement.current, 
        { y:-10, duration: 0.2, ease:'ease.out' })
        .to(counterElement.current,
          { y:0, duration: 1, ease:'bounce.out' });


      
      /* forma prehistoric */
      /* gsap.to(counterElement.current,
        { y:-10, duration: 0.2, ease:'ease.out' })
        .then(_=> gsap.to(counterElement.current,
          { y:0, duration: 1, ease:'bounce.out' })); */
      }

    return () => {};
  }, [counter,MAXIMUM_COUNT]);

  return (
    <div>
      <h1>CounterEffect:</h1>
      <h2 ref={counterElement}>{ counter }</h2>
      <button onClick={() => handleClick(1)}>+</button>
      <button onClick={() => handleClick(-1)}>-</button>
    </div>
  );
};

export default CounterEffect;

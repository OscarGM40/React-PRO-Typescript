import { useCounter } from "../hooks/CounterHook";


const CounterWithHook = () => {

  const { counter,elementToAnimate, handleClick } = useCounter(5,11);
  
  return (
    <div>
      <h1>CounterWithHook:</h1>
      <h2 ref={elementToAnimate}>{ counter }</h2>
      <button onClick={() => handleClick(1)}>+</button>
      <button onClick={() => handleClick(-1)}>-</button>
    </div>
  );
};

export default CounterWithHook;

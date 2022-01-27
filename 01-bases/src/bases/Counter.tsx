import { useState,FC } from "react";

type Props = {
  initialValue?: number;
}

const Counter: FC<Props> = ({initialValue}:Props) => {

  const [ counter, setCounter ] = useState<number>(initialValue!);

  const handleClick = () => {
    setCounter(counter + 1);
  }

  
  return (
  <div>
    <h1>Counter: {counter}</h1>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <button onClick={() => setCounter(counter - 1)}>-</button>
  </div>
  );
};

export default Counter;

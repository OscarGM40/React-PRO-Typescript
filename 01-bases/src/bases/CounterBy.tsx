import { useState, FC } from "react";

type Props = {
  initialValue?: number;
};

type Counter = {
  counter: number;
  clicks: number;
}

const CounterBy: FC<Props> = ({ initialValue }: Props) => {
  
  const [counter, setCounter] = useState<Counter>({
    counter: initialValue!,
    clicks:0
  });

  const handleClick = (value: number) =>{
    setCounter({
      counter: counter.counter + value,
      clicks: counter.clicks + 1
    });
  }

  return (
    <div>
      <h1>CounterBy: {counter.counter}</h1>
      <h1>Clicks: {counter.clicks}</h1>
      <button onClick={() => handleClick(1) }>+</button>
      <button onClick={() => handleClick(-1) }>-</button>
    </div>
  );
};

export default CounterBy;

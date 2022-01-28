import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import * as actions from './actions/actions';


const INITIAL_STATE:CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

const CounterReducerComponent = () => {

  
  const [ state , dispatch] = useReducer(counterReducer, INITIAL_STATE);

  
  const handleIncrease = (value:number) => {
    dispatch(actions.doIncreaseBy(value));
  }

  const handleDecrease = (value:number) => {
    dispatch(actions.doDecrementBy(value));
  }
  
  return (
  <div>
    <h1>CounterReducerSegmented:</h1>
    <pre>
      { JSON.stringify(state, null, 2) }
    </pre>
   
    <button onClick={() => handleIncrease(1)}>+1</button>
    <button onClick={() => handleIncrease(5)}>+5</button>
    <button onClick={() => handleIncrease(10)}>+10</button>

      <button onClick={() => dispatch(actions.doReset())}>Reset</button>

      <button onClick={() => handleDecrease(1)}>-1</button>
      <button onClick={() => handleDecrease(5)}>-5</button>
      <button onClick={() => handleDecrease(10)}>-10</button>

  </div>
  );
};

export default CounterReducerComponent;

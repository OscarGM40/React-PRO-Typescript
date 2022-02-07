import { useReducer } from "react";

type Props = {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE:CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

type Action = 
  | { type: 'increaseBy', payload: {value: number}}
  | { type: 'decrementBy', payload: {value: number}}
  | { type: 'reset' } 

const counterReducer = (state:CounterState, action:Action) => {
  switch (action.type) {
    case 'increaseBy':
      return {
        ...state,
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      }
    case 'decrementBy':
      return {
        ...state,
        counter: state.counter - action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      }
    case 'reset':
      return {
        ...state,
        counter: 0,
        previous: 0,
        changes: 0,
      }
    default:
      return state;
  }
}

const CounterReducerComponent = () => {

  
  const [ state , dispatch] = useReducer(counterReducer, INITIAL_STATE);

  
  const handleIncrease = (value:number) => {
    dispatch({ type: 'increaseBy', payload: {value} });
  }

  const handleDecrease = (value:number) => {
    dispatch({ type: 'decrementBy', payload: {value} });
  }
  
  return (
  <div>
    <h1>CounterReducer:</h1>
    <pre>
      { JSON.stringify(state, null, 2) }
    </pre>
   
    <button onClick={() => handleIncrease(1)}>+1</button>
    <button onClick={() => handleIncrease(5)}>+5</button>
    <button onClick={() => handleIncrease(10)}>+10</button>

      <button onClick={() => dispatch({
        type:'reset',
      })}>Reset</button>

      <button onClick={() => handleDecrease(1)}>-1</button>
      <button onClick={() => handleDecrease(5)}>-5</button>
      <button onClick={() => handleDecrease(10)}>-10</button>

  </div>
  );
};

export default CounterReducerComponent;

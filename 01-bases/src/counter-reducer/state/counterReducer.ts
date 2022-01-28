import { Action, ActionsTypes } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (state: CounterState, action: Action) => {
  switch (action.type) {
    case ActionsTypes.INCREASE_BY:
      return {
        ...state,
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      }
    case ActionsTypes.DECREMENT_BY:
      return {
        ...state,
        counter: state.counter - action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      }
    case ActionsTypes.RESET:
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
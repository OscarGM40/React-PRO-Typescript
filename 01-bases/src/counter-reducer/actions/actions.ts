export enum ActionsTypes {
  INCREASE_BY = 'increaseBy',
  DECREMENT_BY = 'decrementBy',
  RESET = 'reset',
}
export type Action =
  | { type:ActionsTypes.INCREASE_BY,payload:{ value: number } }
  | { type:ActionsTypes.DECREMENT_BY,payload:{ value: number } }
  | { type: ActionsTypes.RESET }  

export const doReset = ():Action => ({
    type: ActionsTypes.RESET,
})

export const doIncreaseBy = (value: number):Action => ({
    type: ActionsTypes.INCREASE_BY,
    payload: { value },
})

export const doDecrementBy = (value: number):Action => ({
    type: ActionsTypes.DECREMENT_BY,
    payload: { value },
})
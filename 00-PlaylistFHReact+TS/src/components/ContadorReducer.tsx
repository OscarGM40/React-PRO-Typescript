import { useReducer } from "react"

const initialState = {
  contador: 0,
}
/* type ContadorActions = {
  type: 'incrementar' | 'decrementar' | 'reset',
  payload?: number,
} */

type ContadorActions = 
  | {type: 'incrementar', payload: number}
  | {type: 'decrementar',payload: number}
  | {type: 'reset',payload?: number};


//recuerda que un reducer siempre regresa un estado nuevo
const contadorReducer = (state: typeof initialState, action:ContadorActions) => {
  switch (action.type) {
    case 'incrementar':
      return {
        ...state,
        contador: state.contador + action.payload
      }
    case 'decrementar':
      return {
        ...state,
        contador: state.contador - action.payload
      }
    case 'reset':
      return {
        ...state,
        contador: 0
      }
    default:
      return {...state}
  }}


const ContadorReducer = () => {
  
  const [ contadorState, dispatch ] = useReducer(contadorReducer, initialState);

  
  return (
    <>
     <h2>Contador: {contadorState.contador}</h2> 
     <button className="btn btn-outline-primary"
        onClick={() => dispatch({type:'incrementar', payload: 1})}
     >+1</button>
     <button className="btn btn-outline-primary"
        onClick={() => dispatch({type:'incrementar', payload: -1})}
     >-1</button>
     <button className="btn btn-outline-danger"
        onClick={() => dispatch({type:'reset'})}
     >Reset</button>
    </>
  )
}

export default ContadorReducer

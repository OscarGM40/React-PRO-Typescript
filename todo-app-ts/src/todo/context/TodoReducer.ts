import { Todo, TodoState } from "../interfaces/interfaces";




/* recuerda que las actions del reducer llevan esta sintaxis.Fijate que cuando sepa que el payload será un id puedo usar payload: {id:string}.Genial */
type TodoAction = 
 | { type: 'ADD_TODO', payload: Todo }
 | { type: 'TOGGLE_TODO', payload: {id:string} }


/* el state es claro que ya tengo el tipo */
export const todoReducer = (state:TodoState,action:TodoAction):TodoState=> {
  switch(action.type){
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if(todo.id === action.payload.id){
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo;
        })
      }
      default:
        return state;
    }
}
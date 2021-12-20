import { useContext, useReducer } from 'react';
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { todoReducer } from './TodoReducer';




const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      desc:'Recolectar las piedras del infinito',
      completed: false,
    },
    {
      id: '2',
      desc:'Piedra del alma',
      completed: false,
    },

  ],
  pending: 2,
  completed: 0
}

/* para definir que children es un elemento JSX(ya que lo es) simplemente uso la clase JSX.element con esa propiedad.
Fijate que puede ser uno o varios,casi siempre varios */
interface TodoProviderProps  {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({children}:TodoProviderProps) => {

  const [ todoState,dispatch] = useReducer(todoReducer,INITIAL_STATE);
  
  return (
   <TodoContext.Provider value={{
      todoState,
      // dispatch
   }}>
      {children}
   </TodoContext.Provider>
    );
}
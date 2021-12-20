import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";


/* eb Javascript createContext(undefined) no da error pero en tS no voy a poder iniciar un contexto vacío */


/* la diferencia principal entre un type y una interfaz es que los types no se pueden extender,no aceptan herencia.Pero exportar se exportan como todos asinto */

export type TodoContextProps = {
  todoState: TodoState;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);
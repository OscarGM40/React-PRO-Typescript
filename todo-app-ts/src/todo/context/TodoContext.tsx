import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

/* la diferencia principal entre un type y una interfaz es que los types no se pueden extender,no aceptan herencia.Pero exportar se exportan como todos asinto */
export type TodoContextProps = {
  todoState: TodoState;
  toggleTodo: (id: string) => void;
};

/* en Javascript createContext(undefined) no da error pero en tS no voy a poder iniciar un contexto vacío */
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);
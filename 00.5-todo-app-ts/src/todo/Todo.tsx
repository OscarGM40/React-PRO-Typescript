import { TodoProvider } from "./context/TodoProvider"
import { TodoList } from './components/TodoList';
import { Title } from "./components/Title";




export const Todo = () => {

  /* no puedo usar un hook que accede a un contexto antes del proveedor de dicho contexto */
  // const { pendingTodos } = useTodos();
  
  return (
    <TodoProvider>
      <Title />
      <TodoList />

    </TodoProvider>
  )
}

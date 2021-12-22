import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces"




interface props {
 todo: Todo
}


export const TodoItem = ( {todo} :props ) => {

  const { toggleTodo } = useTodos();

  return (
    <li 
      style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? '#ccc' : '#000'
      }}
      onDoubleClick={ () => toggleTodo(todo.id) }>
      {todo.desc}
    </li>
  )
}

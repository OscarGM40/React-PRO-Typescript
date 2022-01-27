import { useTodos } from "../hooks/useTodos";

export const Title = () => {
  const { pendingTodos } = useTodos();

  return (
    <h6>
      Pending Todos:
      <pre>{JSON.stringify(pendingTodos, null, 2)} </pre>
      <span>
        Puedo usar find + barra espaciadora en vim para buscar por el siguiente
        espacio en blanco.Puedo usar replace + Enter para cambiarlo por un salto
        de linea
      </span>
    </h6>
  );
};

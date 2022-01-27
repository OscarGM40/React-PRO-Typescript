/* contrl + shift + s con el indice,con el anular para comentar */
import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

const Usuario = () => {
  /*un useState<> vacio siempre asigna el valor de undefined ya que su genérico es useState<undefined> en TS*/
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "juan",
    });
  };

  return (
    <div className="mt-5">
      <h3>Usuario: useState</h3>

      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>

      {!user ? (
        <pre className="mt-2">No hay usuario</pre>
      ) : (
        <pre className="mt-2"> {JSON.stringify(user)}</pre>
      )}
    </div>
  );
};

export default Usuario;

import { ChangeEvent, useState } from "react"

/* asi se pasan genericos a una function normal */
//  export function useForm<T>(initialState:T){

/* sin embargo es algo obsoleto.Mejor seguir con las af,lo único que cambia un poco la zona y T debe de heredar */
export const useForm = <T extends Object>(initialState: T) => {
// <T extends Object | T extends Array> <- puedo usar varios
  const [formulario, setFormulario] = useState(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value
    })
  }

  return {
    formulario,
    handleChange,
    ...formulario //buena idea hacer el spread del getter siempre
  };
}


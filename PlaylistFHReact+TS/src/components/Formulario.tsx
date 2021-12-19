import { useForm } from "../hooks/useForm"


interface FormData {
  nombre: string;
  email: string;
} 


export const Formulario = () => {

/*   const [ formulario, setFormulario ] = useState({
    nombre: "",
    email: "",
  }) */

  /* ya ni siquiera necesito la interfaz,sin embargo la dejaré */
  const { formulario,nombre,email, handleChange } = useForm<FormData>({
    nombre: "",
    email: "",
  });
 
  /* en React uso Synthetic Events,realmente no existen en TS/JS asi que un onChange de React es un ChangeEvent<T> en JS(que es lo que tengo que pasar a TS,pues TS sólo conoce JS).
  Fijate que además xxxEvent<T>es un genérico y necesita saber el tipo del control que está manipulando,luego es ChangeEvent<HTMLInputElement>(pues son dos <inputs>  */
/*   const handleChange = ( {target}:ChangeEvent<HTMLInputElement> ) => {
    setFormulario({
      ...formulario,
      [target.name]: target.value
    })
  } */
/* NOTA:todos los xxxEvents de JS se importan del core de react 
Si fuera un select seria un ChangeEvent<HTMLSelectElement>*/
  return (
    <form autoComplete="off">
      
     <div className="mb-3">
       <label htmlFor="" className="form-label"></label>
        <input type="text"
           className="form-control"
           name="nombre"
           placeholder="Enter your name" 
           onChange={handleChange}
           value={nombre}
           />
      </div> 

     <div className="mb-3">
       <label htmlFor="" className="form-label"></label>
        <input type="email"
           className="form-control"
           name="email"
           placeholder="Enter your email" 
           onChange={handleChange}
            value={email}
           />
       </div> 

      {/* JSON.stringify serializa un objeto.Recuerda que no puedo imprimir un objeto directamente en javascript. */}
      <pre>{JSON.stringify(formulario)}</pre>
      
    </form>
  )
}

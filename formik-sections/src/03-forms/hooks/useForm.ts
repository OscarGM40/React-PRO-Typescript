import { ChangeEvent, useState } from "react";

/* ojo con la sintaxis para genéricos con arrows functions */

export const useForm = <T>(initialData:T) => {
/* seria lo mismo que esto */
// export function useForm<T>(initialData:T) {

  const [ formData, setFormData] = useState(initialData);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };
  const reset = () =>{
    setFormData({...initialData});
  }

  const isValidEmail = (email: string) => {
    const re:RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return {
    ...formData,
    formData,
    onChange,
    isValidEmail,
    reset
  }

}
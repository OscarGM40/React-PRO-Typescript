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

  return {
    ...formData,
    formData,
    onChange,
  }

}
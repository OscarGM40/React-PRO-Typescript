import { ErrorMessage, useField } from "formik";
import React from "react";

interface Props {
  label: string;
  name: string;
  id?: string;
  [x: string]: any;
}

/* {label, ...rest} <-operador rest asi { ...rest} vuelve a juntar,asinto,por eso luego las puedo esparcir */
const MySelect = ({ label, ...props }: Props) => {
  const [field ] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />

    {/*   {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};

export { MySelect };

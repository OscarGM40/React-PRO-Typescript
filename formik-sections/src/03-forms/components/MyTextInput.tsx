import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  id?: string;
  [x: string]: any;
}

const MyTextInput = ({ label, ...props }: Props) => {
  /* en field tengo value,onchange,onBlur,.. mientras que en meta tengo error,value,touched... */
  const [field, meta] = useField(props);
  // console.log(field, meta);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {
        meta.touched && meta.error && (
          <span className="error">{meta.error}</span>
      )}
    </>
  );
};

export default MyTextInput;
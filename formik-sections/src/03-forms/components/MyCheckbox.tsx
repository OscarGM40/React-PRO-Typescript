import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}


const MyCheckbox = ({ label, ...props }: Props) => {
  // const [field, meta] = useField({...props,type:'checkbox'});
  const [field, meta] = useField(props);

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
      {/*      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};
export {MyCheckbox}
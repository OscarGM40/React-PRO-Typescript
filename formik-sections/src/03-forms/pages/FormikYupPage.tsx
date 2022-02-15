import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

const FormikYupPage = () => {

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .max(10, "debe de tener máximo 10 caracteres")
        .min(3, "debe de tener minimo 3 caracteres")
        .required("required"),
      lastName: Yup.string()
        .max(15, "debe de tener máximo 15 caracteres")
        .min(3, "debe de tener minimo 3 caracteres")
        .required("required"),
      email: Yup.string()
        .email("debe ser un email válido")
        .required("required"),
    }),
  });

  return (
    <div>
      <h1>Formik Yup -Schema Validator Builder</h1>

      <form noValidate={true} onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          {...getFieldProps("firstName")}
          className={touched.firstName && errors.firstName ? "has-error" : ""}
        />

        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...getFieldProps("lastName")}
          className={touched.lastName && errors.lastName ? "has-error" : ""}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          {...getFieldProps("email")}
          className={touched.email && errors.email ? "has-error" : ""}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;

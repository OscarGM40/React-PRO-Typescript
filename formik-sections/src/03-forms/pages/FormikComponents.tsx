import { useFormik, Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object().shape({
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
        })}
      >
        {({ touched, errors }) => (
          <Form>

            <label htmlFor="firstName">First Name</label>
            <Field
              type="text"
              name="firstName"
              className={
                touched.firstName && errors.firstName ? "has-error" : ""
              }
            />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field
              type="text"
              name="lastName"
              className={touched.lastName && errors.lastName ? "has-error" : ""}
            />
            <ErrorMessage name="lastName" component="span"/>

            <label htmlFor="email">Email Address</label>
            <Field
              type="email"
              name="email"
              className={touched.email && errors.email ? "has-error" : ""}
            />
            <ErrorMessage name="email" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponents;

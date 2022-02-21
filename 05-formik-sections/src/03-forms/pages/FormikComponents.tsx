import { Field, Form, Formik, ErrorMessage } from "formik";
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
          terms: false,
          jobType: "",
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
          terms: Yup.boolean().oneOf([true], "debe aceptar los términos"),
          jobType: Yup.string()
            .required("debe seleccionar una opción")
            .notOneOf(["it-junior"], "no puede ser IT-Junior"),
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
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email Address</label>
            <Field
              type="email"
              name="email"
              className={touched.email && errors.email ? "has-error" : ""}
            />
            <ErrorMessage name="email" component="span" />

            <label>
              <Field type="checkbox" name="terms" />
              Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field
              as="select"
              name="jobType"
              className={touched.jobType && errors.jobType ? "has-error" : ""}
            >
              <option value="">Select One...</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It Senior</option>
              <option value="it-junior">It Junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { FormikComponents };


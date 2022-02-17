import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
import "../styles/styles.css";

const FormikAbstraction = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: [],
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
          jobType: Yup.array()
            .of(Yup.string().required("selecciona una opcion valida"))
            .min(1, "debes seleccionar al menos una opcion"),
          // .notOneOf("it-junior", "no puede ser IT-Junior"),
        })}
      >
        {({ touched, errors }) => (
          <Form>
            <MyTextInput
              label="First Name"
              name={"firstName"}
              className={
                touched.firstName && errors.firstName ? "has-error" : ""
              }
              placeholder="First Name"
            />

            <MyTextInput
              label="Last Name"
              name={"lastName"}
              className={touched.lastName && errors.lastName ? "has-error" : ""}
              placeholder="Last Name"
            />
            <MyTextInput
              label="Email"
              type="email"
              name="email"
              className={touched.lastName && errors.lastName ? "has-error" : ""}
              placeholder="Email"
            />

            <MyCheckbox label="Terms and Conditions" name="terms" />

            <MySelect
              label="Choose your job Type"
              name="jobType"
              multiple={true}
              className={touched.jobType && errors.jobType ? "has-error" : ""}
            >
              <option disabled value="">
                Select One or More
              </option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It Senior</option>
              <option value="it-junior">It Junior</option>
            </MySelect>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { FormikAbstraction };

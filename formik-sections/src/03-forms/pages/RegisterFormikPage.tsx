import { Form, Formik } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput } from "../components";

const initialValues = {
  name: "",
  email: "",
  password1: "",
  password2: "",
};

const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Con Formik</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Required")
            .max(15, "Must be 15 characters or less")
            .min(3, "Must be 3 characters or more"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password1: Yup.string()
            .required("Required")
            .min(6, "Must be 6 characters or more"),
          password2: Yup.string()
            .required("Required")
            .min(6, "Must be 6 characters or more")
            .oneOf([Yup.ref("password1"), null], "Passwords must match"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="Name" name="name" placeholder="Enter name" />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <MyTextInput
              label="Enter password"
              name="password1"
              type="password"
              placeholder="*****"
            />
            <MyTextInput
              label="Repeat password"
              name="password2"
              type="password"
              placeholder="******"
            />
            <button type="submit">Create</button>
            <button type="button" onClick={() => formik.resetForm()}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { RegisterFormikPage };

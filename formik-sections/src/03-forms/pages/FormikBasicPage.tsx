import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const re: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const FormikBasicPage = () => {
  
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (firstName.trim().length <= 0) {
      errors.firstName = "Este campo es necesario";
    } else if (firstName.trim().length > 15) {
      errors.firstName = "Este campo no puede tener más de 15 caracteres";
    }

    if (lastName.trim().length <= 0) {
      errors.lastName = "Este campo es necesario";
    } else if (lastName.trim().length > 10) {
      errors.lastName = "Este campo no puede tener más de 10 caracteres";
    }

    if (email.trim().length <= 0) {
      errors.email = "Este campo es necesario";
    } else if (!re.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate: validate,
    });

  return (
    <div>
      
      <h1>Formik Basic Tutorial</h1>

      <form noValidate={true} onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikBasicPage;

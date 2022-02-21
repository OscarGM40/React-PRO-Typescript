import { Form, Formik } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJson from "./../data/custom-form.json";
import * as Yup from "yup";

const initialValues: { [x: string]: any } = {};

const requiredFields: { [x: string]: any } = {} as unknown as any; 

formJson.map((field) => {
  initialValues[field.name] = field.value;
  
  let schema = Yup.string();

  if (field.validations !== undefined) {
    for(let rule of field.validations) {
      if(rule.type ==="required"){
        schema = schema.required(rule.message);
      }else if (rule.type === "minLength") {
        schema = schema.min((rule as any).value || 1, rule.message);
      } else if (rule.type === "email") {
        schema = schema.email(rule.message);
      }

    }

    requiredFields[field.name] = schema;
  }

});

const validationSchema = Yup.object().shape({...requiredFields});

const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} name={name} label={label}>
                    {options?.map((option) => (
                      <option key={option.id} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              throw new Error("Invalid type: " + type);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { DynamicForm };

import { useState } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

interface FormState {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

const RegisterPage = () => {
  const { formData, onChange } = useForm<FormState>({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { name, email, password1, password2 } = formData;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={(e) => handleSubmit(e)} noValidate>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password1"
          value={password1}
          onChange={onChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={onChange}
          placeholder="Repeat password"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default RegisterPage;

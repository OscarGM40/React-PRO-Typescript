import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

interface FormState {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

const RegisterPage = () => {
  const { formData, onChange, reset,isValidEmail } = useForm<FormState>({
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
          placeholder="Name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          name="email"
          pattern="[0-9]{2}$"
          value={email}
          onChange={onChange}
          onInvalid={(e) =>
            (e.target as HTMLInputElement).setCustomValidity(
              "no cumple la validación"
            )
          }
          placeholder="Email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no válido</span>}
        <input
          type="password"
          name="password1"
          value={password1}
          onChange={onChange}
          placeholder="Password"
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña es demasiado corta</span>}
        <input
          type="password"
          name="password2"
          value={password2}
          onChange={onChange}
          placeholder="Repeat password"
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1 !== password2 && password2.trim().length > 0 && <span>Las contraseñas no coinciden</span>}
        <button type="submit">Create</button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;

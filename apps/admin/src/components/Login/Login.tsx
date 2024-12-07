import "./Login.scss";
import LoginComponent from "@/components/ui/LoginComponent";
import { useLogin } from "@/hooks/useLogin";

type LoginProps = { setToken: (token: string) => void };

export default function Login({ setToken }: LoginProps) {
  const { email, password, errorMessage, handleChange, onSubmitHandler } =
    useLogin(setToken);

  const labels = ["Adress email", "Mot de passe"];
  const inputs = [
    { type: "email", placeholder: "choose@gmail.com", name: "email" },
    { type: "password", placeholder: "***************", name: "password" },
  ];

  const values = {
    email: email,
    password: password,
  };

  return (
    <LoginComponent
      title="Admin Panel"
      subTitle="Choose"
      labels={labels}
      inputs={inputs}
      values={values}
      errorMessage={errorMessage}
      className="login-container"
      onChange={handleChange}
      onSubmitHandler={onSubmitHandler}
    />
  );
}

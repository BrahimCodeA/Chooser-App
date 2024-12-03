import "./Login.scss";
import { useState } from "react";
import { backendUrl } from "../../App";
import axios from "axios";
import { toast } from "react-toastify";
import LoginComponent from "../ui/LoginComponent";

type LoginProps = { setToken: (token: string) => void };

export default function Login({ setToken }: LoginProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateForm = () => {
    if (!email || !password) {
      setErrorMessage("Remplissez tous les champs.");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Adresse email invalide.");
      return false;
    }

    if (password.length < 6) {
      setErrorMessage("Le mot de passe doit contenir au moins 6 caractères.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
        toast.success("Connexion réussie");
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      console.error("Erreur lors de la connexion", error);
      toast.error(
        error.response?.data?.message || "Erreur lors de la connexion"
      );
    }
  };

  const labels = ["Adress email", "Mot de passe"];
  const inputs = [
    { type: "email", placeholder: "choose@gmail.com", name: "email" },
    { type: "password", placeholder: "***************", name: "password" },
  ];
  const values = {
    email: email,
    password: password,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
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

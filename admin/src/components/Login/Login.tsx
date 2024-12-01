import { useState } from "react";
import "./Login.scss";
import { backendUrl } from "../../App";
import axios from "axios";
import { toast } from "react-toastify";

type LoginProps = { setToken: (token: string) => void };

export default function Login({ setToken }: LoginProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Fonction de validation
  const validateForm = () => {
    if (!email || !password) {
      setErrorMessage("Email and Password are required.");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email.");
      return false;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation côté client
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
        toast.success("Login successful!");
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(
        error.response?.data?.message || "An unexpected error occurred"
      );
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Admin Panel</h1>
      <h2 className="login-subtitle">Choose</h2>
      <form onSubmit={onSubmitHandler} className="login-form">
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="email@gmail.com"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="password"
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

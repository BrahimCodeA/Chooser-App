import { useState } from "react";
import "./Login.scss";
import { backendUrl } from "../../App";
import axios from "axios";
import { toast } from "react-toastify";

type LoginProps = { setToken: (token: string) => void };

export default function Login({ setToken }: LoginProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <div>
      <h1>Admin Panel</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="email@gmail.com"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

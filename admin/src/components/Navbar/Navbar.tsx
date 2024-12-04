import "./Navbar.scss";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export default function Navbar({
  setToken,
}: {
  setToken: (token: string) => void;
}) {
  return (
    <div className="navbar-options">
      <Link to="/" className="navbar-link">
        <h2 className="navbar-title">Choose ©</h2>
      </Link>
      <Button
        className="navbar-logout"
        title="Logout"
        onClick={() => setToken("")}
      />
    </div>
  );
}

import "./Navbar.scss";
import { Link } from "react-router-dom";

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
      <button className="navbar-logout" onClick={() => setToken("")}>
        Logout
      </button>
    </div>
  );
}

import "./Navbar.scss";

export default function Navbar({
  setToken,
}: {
  setToken: (token: string) => void;
}) {
  return (
    <div className="navbar-options">
      <h2 className="navbar-title">Chooser ©</h2>
      <button className="navbar-logout" onClick={() => setToken("")}>
        Logout
      </button>
    </div>
  );
}

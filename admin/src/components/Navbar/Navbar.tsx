import "./Navbar.scss";

export default function Navbar({
  setToken,
}: {
  setToken: (token: string) => void;
}) {
  return (
    <div>
      <img src="" alt="" />
      <button onClick={() => setToken("")}>Logout</button>
    </div>
  );
}

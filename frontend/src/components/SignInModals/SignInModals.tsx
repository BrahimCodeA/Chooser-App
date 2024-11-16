import ReactDOM from "react-dom";
import "./SignInModals.scss";
import { MdOutlineClose } from "react-icons/md";

type Props = {
  onClose: () => void;
  openSignUp: () => void;
};

export default function SignInModals({ onClose, openSignUp }: Props) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="icon-close" onClick={onClose}>
          <MdOutlineClose />
        </button>
        <h2>Connexion</h2>
        <form>
          <input type="email" placeholder="chooser@gmail.com" required />
          <input type="password" placeholder="Mot de passe" required />
          <button type="submit">Se connecter</button>
        </form>
        <p className="signup-prompt">
          Pas de compte ?<span onClick={openSignUp}>Inscrivez-vous</span>
        </p>
      </div>
    </div>,
    document.body
  );
}

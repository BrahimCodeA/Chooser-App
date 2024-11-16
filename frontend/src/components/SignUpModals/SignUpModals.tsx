import ReactDOM from "react-dom";
import { MdOutlineClose } from "react-icons/md";

type Props = {
  onClose: () => void;
  openSignIn: () => void;
};

export default function SignUpModals({ onClose, openSignIn }: Props) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="icon-close" onClick={onClose}>
          <MdOutlineClose />
        </button>
        <h2>S'inscrire</h2>
        <form>
          <input type="email" placeholder="chooser@gmail.com" />
          <input type="password" placeholder="Mot de passe" />
          <input type="password" placeholder="Confirmer le mot de passe" />
          <button type="submit">Créer un compte</button>
        </form>
        <p className="signup-prompt">
          Déja un compte ?<span onClick={openSignIn}>Connectez-vous</span>
        </p>
      </div>
    </div>,
    document.body
  );
}

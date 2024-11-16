import { MdOutlineClose } from "react-icons/md";
import ReactDOM from "react-dom";
import "./ModalForm.scss";

type ModalFormProps = {
  onClose: () => void;
  title: string;
  buttonText: string;
  inputs: string[];
  footerText: string;
  footerActionText: string;
  onFooterAction: () => void;
};

export default function ModalForm({
  onClose,
  title,
  buttonText,
  inputs,
  footerText,
  footerActionText,
  onFooterAction,
}: ModalFormProps) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="icon-close" onClick={onClose}>
          <MdOutlineClose />
        </button>
        <h2>{title}</h2>
        <form>
          {inputs.map((placeholder, index) => (
            <input key={index} type="text" placeholder={placeholder} required />
          ))}
          <button type="submit">{buttonText}</button>
        </form>
        <p className="signup-prompt">
          {footerText}
          <span onClick={onFooterAction}>{footerActionText}</span>
        </p>
      </div>
    </div>,
    document.body
  );
}

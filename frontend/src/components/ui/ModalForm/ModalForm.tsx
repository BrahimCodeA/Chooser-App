import "./ModalForm.scss";

type ModalFormProps = {
  onClose: () => void;
  title: string;
  buttonText: string;
  inputs: { type: string; placeholder: string }[];
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
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="icon-close" onClick={onClose}>
          ×
        </button>
        <h2>{title}</h2>
        <form>
          {inputs.map((input, index) => (
            <input
              key={index}
              type={input.type}
              placeholder={input.placeholder}
              required
            />
          ))}
          <button type="submit">{buttonText}</button>
        </form>
        <p className="signup-prompt">
          {footerText}
          <span onClick={onFooterAction}>{footerActionText}</span>
        </p>
      </div>
    </div>
  );
}

import { FaPlus, FaMinus } from "react-icons/fa";

type FooterSectionProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

export default function FooterSection({
  title,
  isOpen,
  onToggle,
  children,
}: FooterSectionProps) {
  return (
    <div className="footer-section">
      <div className="rubrique" onClick={onToggle}>
        <h3 className="footer-rubrique-title">{title}</h3>
        <span className="footer-plus">{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </div>
      <div
        className={`footer-sous-rubrique ${
          isOpen ? "" : "footer-sous-rubrique-hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

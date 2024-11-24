import { useState } from "react";
import FooterSection from "../ui/FooterSection";
import "./Footer.scss";
import { footerDatas } from "../../constants/footerData";

export default function Footer() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const date = new Date();

  const handleToggleSection = (section: string) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {footerDatas.map(({ title, content }, index) => (
          <FooterSection
            key={index}
            title={title}
            isOpen={activeSection === title}
            onToggle={() => handleToggleSection(title)}
          >
            {content}
          </FooterSection>
        ))}
      </div>

      <div className="footer-bottom">
        <p>&copy; {date.getFullYear()} Choose. Tous droits réservés</p>
      </div>
    </footer>
  );
}

import "./Footer.scss";
import { useState } from "react";
import FooterSection from "../ui/FooterSection";
import { footerSections } from "../../constants/footerData";

export default function Footer() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const date = new Date();

  const handleToggleSection = (section: string) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <footer className="footer">
      <h2>CHOOSE</h2>
      <div className="footer-container">
        {footerSections.map(({ title, content }, index) => (
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

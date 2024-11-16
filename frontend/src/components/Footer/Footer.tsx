// Footer.tsx
import "./Footer.scss";
import { useState } from "react";
import FooterSection from "../ui/FooterSection";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const date = new Date().getFullYear();

  const handleToggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterSection
          title="Contact"
          isOpen={activeSection === "contact"}
          onToggle={() => handleToggleSection("contact")}
        >
          <p className="footer-items">
            <MdMarkEmailUnread />
            support@chooserIb.com
          </p>
          <p className="footer-items">
            <BsFillTelephoneFill />
            +33 1 23 45 67 89
          </p>
        </FooterSection>

        <FooterSection
          title="Liens utiles"
          isOpen={activeSection === "liens"}
          onToggle={() => handleToggleSection("liens")}
        >
          <ul>
            <li>
              <a className="footer-links-utils" href="/about">
                À propos
              </a>
            </li>
            <li>
              <a className="footer-links-utils" href="/faq">
                FAQ
              </a>
            </li>
            <li>
              <a className="footer-links-utils" href="/contact">
                Contactez-nous
              </a>
            </li>
          </ul>
        </FooterSection>

        <FooterSection
          title="Suivez-nous"
          isOpen={activeSection === "suivez-nous"}
          onToggle={() => handleToggleSection("suivez-nous")}
        >
          <ul className="social-media">
            <li>
              <a className="social-icon" href="https://facebook.com">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a className="social-icon" href="https://instagram.com">
                <RiInstagramFill />
              </a>
            </li>
          </ul>
        </FooterSection>

        <div className="footer-bottom">
          <p>&copy; {date} Chooser. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

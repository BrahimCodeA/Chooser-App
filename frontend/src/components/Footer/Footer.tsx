import "./Footer.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

type Section = 'contact' | 'liens' | 'suivez-nous' | null;

export default function Footer() {
  const [activeSection, setActiveSection] = useState<Section>(null);
  const date = new Date().getFullYear();

  const handleClickRubrique = (section: Section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <div className="rubrique" onClick={() => handleClickRubrique('contact')}>
            <h3 className="footer-rubrique-title">Contact</h3>
            <span className="footer-plus">
              {activeSection !== 'contact' ? <FaPlus /> : <FaMinus />}
            </span>
          </div>
          <div className={`${activeSection === 'contact' ? ("footer-sous-rubrique") : ("footer-sous-rubrique-hidden")}`}>
            <p className="footer-items">
              <MdMarkEmailUnread />
              support@chooserIb.com
              </p>
            <p className="footer-items">
              <BsFillTelephoneFill />
              +33 1 23 45 67 89
              </p>
          </div>
        </div>

        <div className="footer-section">
          <div className="rubrique" onClick={() => handleClickRubrique('liens')}>
            <h3 className="footer-rubrique-title">Liens utiles</h3>
            <span className="footer-plus">
              {activeSection !== 'liens' ? <FaPlus /> : <FaMinus />}
            </span>
          </div>
          <div className={`${activeSection === 'liens' ? ("footer-sous-rubrique") : ("footer-sous-rubrique-hidden")}`}>
            <ul>
              <li><a className="footer-links-utils" href="/about">À propos</a></li>
              <li><a className="footer-links-utils" href="/faq">FAQ</a></li>
              <li><a className="footer-links-utils" href="/contact">Contactez-nous</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-section">
          <div className="rubrique" onClick={() => handleClickRubrique('suivez-nous')}>
            <h3 className="footer-rubrique-title">Suivez-nous</h3>
            <span className="footer-plus">
              {activeSection !== 'suivez-nous' ? <FaPlus /> : <FaMinus />}
            </span>
          </div>
          <div className={`${activeSection === 'suivez-nous' ? ("footer-sous-rubrique") : ("footer-sous-rubrique-hidden")}`}>
            <ul className="social-media">
              <li><a className="social-icon" href="https://facebook.com"><FaFacebookF /></a></li>
              <li><a className="social-icon" href="https://instagram.com"><RiInstagramFill /></a></li>
              <li><a className="social-icon" href="https://twitter.com"><FaXTwitter /></a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {date} Chooser. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

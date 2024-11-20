import { GrDeliver } from "react-icons/gr";
import "./NavbarCarousel.scss";

export default function NavbarCarousel() {
  const messages = [
    "Livraison gratuite dans toute la France.",
    "Offre spéciale : -20% sur les nouveautés !",
    "Retour gratuit sous 30 jours.",
    "Satisfait ou remboursé.",
  ];

  return (
    <nav className="navbar-2">
      <GrDeliver className="navbar2-icon" />
      {messages.map((message, index) => (
        <div key={index} className="carousel-message">
          {message}
        </div>
      ))}
    </nav>
  );
}

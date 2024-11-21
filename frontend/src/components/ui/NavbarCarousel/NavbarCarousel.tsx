import "./NavbarCarousel.scss";
import Slider from "react-slick";
import {
  BiSearchAlt,
  BiHeart,
  BiUser,
  BiShoppingBag,
  BiStar,
  BiBell,
  BiGift,
} from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const icons = [
  <BiSearchAlt />,
  <BiHeart />,
  <BiUser />,
  <BiShoppingBag />,
  <BiStar />,
  <BiBell />,
  <BiGift />,
];

const titles = [
  "Nouvelle collection",
  "Meilleures ventes",
  "Tendances",
  "Offres spéciales",
  "Produits recommandés",
  "Nouveautés",
  "Cadeaux exclusifs",
];

export default function NavbarCarousel() {
  const settings = {
    dots: false, // Désactiver la pagination
    infinite: true, // Défilement infini
    speed: 5000, // Vitesse de transition
    slidesToShow: 3, // Nombre d'éléments visibles à la fois
    slidesToScroll: 1, // Nombre d'éléments à défiler à chaque transition
    autoplay: true, // Activer l'autoplay
    autoplaySpeed: 0, // Défilement sans pause (délai entre les slides)
    arrows: false, // Désactiver les flèches de navigation
  };

  return (
    <nav className="navbar-2">
      <Slider {...settings}>
        {icons.map((icon, index) => (
          <div key={index}>
            <p className="navbar2-items">
              {icon} {titles[index % titles.length]}
            </p>
          </div>
        ))}
      </Slider>
    </nav>
  );
}

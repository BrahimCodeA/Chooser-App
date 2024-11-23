import "./CarouselNav2.scss";
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
import { sliderSettings } from "../../config/sliderSettings";

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
  "Produits populaires",
  "Nouveautés",
  "Cadeaux exclusifs",
];

export default function NavbarCarousel() {
  return (
    <nav className="navbar-2">
      <Slider {...sliderSettings}>
        {icons.map((icon, index) => (
          <div key={index} className="navbar2-items">
            <span>{icon}</span>
            <h4>{titles[index % titles.length]}</h4>
          </div>
        ))}
      </Slider>
    </nav>
  );
}

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
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
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

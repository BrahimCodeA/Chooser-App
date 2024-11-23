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
  "Produits populaires",
  "Nouveautés",
  "Cadeaux exclusifs",
];

export default function NavbarCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 7500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <nav className="navbar-2">
      <Slider {...settings}>
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

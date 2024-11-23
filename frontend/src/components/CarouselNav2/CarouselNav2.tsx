import "./CarouselNav2.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings } from "../../config/sliderSettings";
import { icons, titles } from "../../constants/carousalNav2Data";

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

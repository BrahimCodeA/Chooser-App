import HeroComponent from "../Hero/Hero";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import "./Main.scss";

export default function Main() {
  return (
    <div className="main-container">
      <HeroComponent />
      <ProductCarousel />
    </div>
  );
}

import BestSellerCarousel from "../BestSellerCarousel/BestSellerCarousel";
import HeroComponent from "../Hero/Hero";
import "./Main.scss";

export default function Main() {
  return (
    <div className="main-container">
      <HeroComponent />
      <BestSellerCarousel />
    </div>
  );
}

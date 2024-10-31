import HeroComponent from "../Hero/Hero"
import ProductCarousel from "../ProductCarousel/ProductCarousel"
import "./Main.css"

export default function Main() {
  return (
    <div className="main-container">
        <HeroComponent />
        <ProductCarousel />
    </div>
  )
}

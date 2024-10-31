import { useState } from "react";
import "./ProductCarousel.css";

const products = [
  { id: 1, name: "Product 1", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Product 4", image: "https://via.placeholder.com/150" },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div className="carousel">
        <h2>Les nouveautés</h2>
      <button className="carousel-button" onClick={prevProduct}>
        {"<"}
      </button>
      <div className="carousel-item">
        <img
          src={products[currentIndex].image}
          alt={products[currentIndex].name}
        />
        <p>{products[currentIndex].name}</p>
      </div>
      <button className="carousel-button" onClick={nextProduct}>
        {">"}
      </button>
    </div>

    <div className="carousel">
        <h2>Homme</h2>
      <button className="carousel-button" onClick={prevProduct}>
        {"<"}
      </button>
      <div className="carousel-item">
        <img
          src={products[currentIndex].image}
          alt={products[currentIndex].name}
        />
        <p>{products[currentIndex].name}</p>
      </div>
      <button className="carousel-button" onClick={nextProduct}>
        {">"}
      </button>
    </div>

    <div className="carousel">
        <h2>Femme</h2>
      <button className="carousel-button" onClick={prevProduct}>
        {"<"}
      </button>
      <div className="carousel-item">
        <img
          src={products[currentIndex].image}
          alt={products[currentIndex].name}
        />
        <p>{products[currentIndex].name}</p>
      </div>
      <button className="carousel-button" onClick={nextProduct}>
        {">"}
      </button>
    </div>

    <div className="solde">
        <h2>Solde -50% pour ce modèle</h2>
        <img src="" alt="" />
    </div>

    <div className="carousel">
        <h2>Enfants</h2>
      <button className="carousel-button" onClick={prevProduct}>
        {"<"}
      </button>
      <div className="carousel-item">
        <img
          src={products[currentIndex].image}
          alt={products[currentIndex].name}
        />
        <p>{products[currentIndex].name}</p>
      </div>
      <button className="carousel-button" onClick={nextProduct}>
        {">"}
      </button>
    </div>
    </>
  );
}

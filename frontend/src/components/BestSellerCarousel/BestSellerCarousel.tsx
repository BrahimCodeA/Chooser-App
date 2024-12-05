import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselProductSettings } from "../../config/carouselProductSettings";

type BestSellerProps = {
  _id: string;
  name: string;
  image: string[];
  description: string;
};

export default function BestSellerCarousel() {
  const [products, setProducts] = useState<BestSellerProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBestSellerProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get("/api/product/list?bestseller=true");
        if (response.data && response.data.products) {
          setProducts(response.data.products);
        } else {
          setError("Aucun produit trouvé");
        }
      } catch (err: any) {
        setError(err.message || "Quelque chose s'est mal passé");
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellerProducts();
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <div>
      <nav>
        <Slider {...carouselProductSettings}>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id}>
                <img
                  src={product.image?.[0] || "/placeholder.png"}
                  alt={product.name}
                  style={{ width: "100%" }}
                />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            ))
          ) : (
            <h3>Aucun produit pour le moment ...</h3>
          )}
        </Slider>
      </nav>
    </div>
  );
}

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { RootState } from "../redux/store";
import { setProducts, deleteProduct } from "../redux/productSlice";
import { backendUrl } from "../App";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function List({ token }: { token: string }) {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    const productList = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/product/list`, {
          headers: { token },
        });
        dispatch(setProducts(response.data.products));
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    productList();
  }, [dispatch, token]);

  const onDeleteHandler = async (id: string) => {
    try {
      const response = await axios.delete(`${backendUrl}/api/product/remove`, {
        data: { id },
        headers: { token },
      });

      dispatch(deleteProduct(id));
      toast.success("Produit supprimé avec succès");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Liste des produits</h2>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Prix : {product.price} €</p>
            <p>Stock : {product.stock}</p>
            <p>Catégorie : {product.category}</p>
            <p>Marque : {product.brand}</p>
            <p>
              Tailles :
              {Array.isArray(product.sizes)
                ? product.sizes.map((size, index) => (
                    <span key={index}>
                      {size}
                      {index < product.sizes.length - 1 ? ", " : ""}
                    </span>
                  ))
                : "Aucune taille disponible"}
            </p>
            <p>Bestseller : {product.bestseller ? "Oui" : "Non"}</p>
            <p>En promotion : {product.isDiscounted ? "Oui" : "Non"}</p>
            <p>Montant de la réduction : {product.discountAmount} €</p>

            {Array.isArray(product.image) &&
              product.image.map((img, index) =>
                img ? (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name} image ${index + 1}`}
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                  />
                ) : (
                  <p key={index}>Aucune image {index + 1} ajoutée</p>
                )
              )}

            <button onClick={() => onDeleteHandler(product._id)}>
              Supprimer
            </button>
          </div>
        ))
      ) : (
        <p>Aucun produit disponible</p>
      )}

      <ToastContainer />
    </div>
  );
}

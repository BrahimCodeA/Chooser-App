import "./List.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { RootState } from "../../redux/store";
import { setProducts, deleteProduct } from "../../redux/productSlice";
import { backendUrl } from "../../App";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiChatDeleteFill } from "react-icons/ri";

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
    <div className="product-list">
      <h2>Liste des produits</h2>
      {products.length > 0 ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
              <th>Catégorie</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.price} €</td>
                <td>{product.category}</td>
                <td className="product-image">
                  {Array.isArray(product.image) &&
                    product.image.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${product.name} image ${index + 1}`}
                        className="product-thumbnail"
                      />
                    ))}
                </td>
                <td>
                  <button
                    onClick={() => onDeleteHandler(product._id)}
                    className="delete-button"
                  >
                    <RiChatDeleteFill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-products">Aucun produit disponible</p>
      )}
      <ToastContainer />
    </div>
  );
}

import "./ListProduct.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useProductList } from "../../hooks/useProductList";
import { ToastContainer } from "react-toastify";
import { RiChatDeleteFill } from "react-icons/ri";
import { Button } from "../../components/ui/Button";

export default function List({ token }: { token: string }) {
  const products = useSelector((state: RootState) => state.product.products);
  const { onDeleteHandler } = useProductList(token);

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
                  <Button
                    className="delete-button"
                    onClick={() => onDeleteHandler(product._id)}
                    title={<RiChatDeleteFill />}
                  />
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

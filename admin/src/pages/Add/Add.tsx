import { useState } from "react";
import "./Add.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/productSlice";
import { backendUrl } from "../../App";
import cloud from "../../assets/icon-cloud.png";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Add({ token }: { token: string }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Homme");
  const [brand, setBrand] = useState("Jordan");
  const [sizes, setSizes] = useState<string[]>([]);
  const [bestseller, setBestseller] = useState(false);
  const [isDiscounted, setIsDiscounted] = useState(false);
  const [discountAmount, setDiscountAmount] = useState("");
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("brand", brand);
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("bestseller", String(bestseller));
    formData.append("isDiscounted", String(isDiscounted));
    formData.append("discountAmount", discountAmount);

    if (image1) formData.append("image1", image1);

    if (image2) formData.append("image2", image2);

    try {
      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        {
          headers: { token },
        }
      );

      const newProduct = { ...response.data, id: response.data.id };
      dispatch(addProduct(newProduct));

      console.log(response.data);
      toast.success("Produit ajouté avec succès");

      setName("");
      setDescription("");
      setPrice("");
      setStock("");
      setCategory("Homme");
      setBrand("");
      setSizes([]);
      setBestseller(false);
      setIsDiscounted(false);
      setDiscountAmount("");
      setImage1(null);
      setImage2(null);
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'ajout du produit");
    }
  };

  return (
    <div className="product-form">
      <form onSubmit={onSubmitHandler} className="form">
        <input
          type="text"
          name="name"
          className="form-input"
          placeholder="Nom du produit"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          name="description"
          className="form-textarea"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          name="price"
          className="form-input"
          placeholder="Prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <select
          name="category"
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="Homme">Homme</option>
          <option value="Femme">Femme</option>
          <option value="Enfant">Enfant</option>
        </select>
        <input
          type="number"
          name="stock"
          className="form-input"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
        <input
          type="text"
          name="brand"
          className="form-input"
          placeholder="Marque"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
        <input
          type="text"
          name="sizes"
          className="form-input"
          placeholder="Tailles (ex: ['36', '42', '44'])"
          value={sizes.join(", ")}
          onChange={(e) =>
            setSizes(e.target.value.split(",").map((size) => size.trim()))
          }
          required
        />
        <label className="form-checkbox-label">
          <input
            type="checkbox"
            name="bestseller"
            className="form-checkbox"
            checked={bestseller}
            onChange={(e) => setBestseller(e.target.checked)}
          />
          Meilleures ventes
        </label>
        <label className="form-checkbox-label">
          <input
            type="checkbox"
            name="isDiscounted"
            className="form-checkbox"
            checked={isDiscounted}
            onChange={(e) => setIsDiscounted(e.target.checked)}
          />
          Activé une promotion
        </label>
        <input
          type="number"
          name="discountAmount"
          className="form-input"
          placeholder="Montant de la remise"
          value={discountAmount}
          onChange={(e) => setDiscountAmount(e.target.value)}
          disabled={!isDiscounted}
        />
        <div className="form-images">
          <label className="form-image-upload">
            <img
              src={image1 ? URL.createObjectURL(image1) : cloud}
              alt="Image 1"
              className="form-image-preview"
            />
            <input
              type="file"
              name="image1"
              className="form-file-input"
              onChange={(e) => setImage1(e.target.files![0])}
              hidden
            />
          </label>
          <label className="form-image-upload">
            <img
              src={image2 ? URL.createObjectURL(image2) : cloud}
              alt="Image 2"
              className="form-image-preview"
            />
            <input
              type="file"
              name="image2"
              className="form-file-input"
              onChange={(e) => setImage2(e.target.files![0])}
              hidden
            />
          </label>
        </div>
        <button type="submit" className="form-submit-button">
          Ajouter le produit
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}

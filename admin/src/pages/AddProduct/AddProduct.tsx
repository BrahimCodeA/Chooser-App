import "./AddProduct.scss";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/productSlice";
import { ToastContainer, toast } from "react-toastify";
import {
  InputField,
  TextAreaField,
  CheckboxField,
  SelectField,
  ImageUploader,
} from "../../components/ui/FormComponents";
import { backendUrl } from "../../App";
import "react-toastify/dist/ReactToastify.css";
import cloudImage from "../../assets/icon-cloud.png";

export default function Add({ token }: { token: string }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | string>("");
  const [stock, setStock] = useState<boolean>(true);
  const [category, setCategory] = useState("Homme");
  const [brand, setBrand] = useState("");
  const [sizes, setSizes] = useState<string[]>([]);
  const [bestseller, setBestseller] = useState<boolean>(false);
  const [isDiscounted, setIsDiscounted] = useState<boolean>(false);
  const [discountAmount, setDiscountAmount] = useState<number>(0);
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);

  const resetForm = () => {
    setName("");
    setDescription("");
    setPrice("");
    setStock(true);
    setCategory("Homme");
    setBrand("");
    setSizes([]);
    setBestseller(false);
    setIsDiscounted(false);
    setDiscountAmount(0);
    setImage1(null);
    setImage2(null);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", String(price));
    formData.append("stock", String(stock));
    formData.append("category", category);
    formData.append("brand", brand);
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("bestseller", String(bestseller));
    formData.append("isDiscounted", String(isDiscounted));
    formData.append("discountAmount", String(discountAmount));
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
      dispatch(addProduct(response.data));
      toast.success("Produit ajouté avec succès");
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de l'ajout du produit");
    }
  };

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setDiscountAmount(isNaN(value) ? 0 : value);
  };

  return (
    <div className="product-form">
      <form onSubmit={onSubmitHandler} className="form">
        <InputField
          type="text"
          value={name}
          placeholder="Nom du produit"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextAreaField
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <InputField
          type="number"
          value={price}
          placeholder="Prix"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <SelectField
          value={category}
          options={["Homme", "Femme", "Enfant"]}
          onChange={(e) => setCategory(e.target.value)}
        />
        <InputField
          type="text"
          value={brand}
          placeholder="Marque"
          onChange={(e) => setBrand(e.target.value)}
          required
        />
        <InputField
          type="text"
          value={sizes.join(", ")}
          placeholder="Tailles (ex: 36, 42, 44)"
          onChange={(e) =>
            setSizes(e.target.value.split(",").map((size) => size.trim()))
          }
        />
        <CheckboxField
          checked={bestseller}
          label="Meilleures ventes"
          onChange={(e) => setBestseller(e.target.checked)}
        />
        <CheckboxField
          checked={stock}
          label="En stock"
          onChange={(e) => setStock(e.target.checked)}
        />
        <CheckboxField
          checked={isDiscounted}
          label="Activer une promotion"
          onChange={(e) => setIsDiscounted(e.target.checked)}
        />
        <InputField
          type="number"
          value={discountAmount}
          placeholder="Montant de la remise"
          onChange={handleDiscountChange}
          disabled={!isDiscounted}
        />
        <div className="form-images">
          <ImageUploader
            image={image1}
            onImageChange={setImage1}
            placeholderImg={cloudImage}
          />
          <ImageUploader
            image={image2}
            onImageChange={setImage2}
            placeholderImg={cloudImage}
          />
        </div>
        <button type="submit" className="form-submit-button">
          Ajouter le produit
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}
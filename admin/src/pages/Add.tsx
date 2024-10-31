import { useState } from 'react';
import "./Add.css";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';
import { backendUrl } from '../App'; 
import photo from '../assets/CvPhoto-2.jpg'; 
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Add({ token }: { token: string }) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('Homme');
  const [brand, setBrand] = useState('Jordan');
  const [sizes, setSizes] = useState<string[]>([]);
  const [bestseller, setBestseller] = useState(false);
  const [isDiscounted, setIsDiscounted] = useState(false);
  const [discountAmount, setDiscountAmount] = useState('');
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('category', category);
    formData.append('brand', brand);
    formData.append('sizes', JSON.stringify(sizes));
    formData.append('bestseller', String(bestseller));
    formData.append('isDiscounted', String(isDiscounted));
    formData.append('discountAmount', discountAmount);

    if (image1) {
      formData.append('image1', image1);
    }
    if (image2) {
      formData.append('image2', image2);
    }

    try {
      const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
        headers: { token },
      });

      const newProduct = { ...response.data, id: response.data.id }; 
      dispatch(addProduct(newProduct)); 
    
      console.log(response.data);
      toast.success('Produit ajouté avec succès');

      setName('');
      setDescription('');
      setPrice('');
      setStock('');
      setCategory('Homme');
      setBrand('Jordan');
      setSizes([]);
      setBestseller(false);
      setIsDiscounted(false);
      setDiscountAmount('');
      setImage1(null);
      setImage2(null);
    } catch (error) {
      console.error(error);
      toast.error('Erreur lors de l\'ajout du produit');
    }
  };

  return (
    <div>
      <h2>Ajouter un produit</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Nom du produit"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <select
          name="category"
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
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />
        <input
          type="text"
          name="brand"
          placeholder="Marque"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
        <input
          type="text"
          name="sizes"
          placeholder="Tailles (ex: ['36', '42', '44'])"
          value={sizes.join(', ')} 
          onChange={(e) => setSizes(e.target.value.split(',').map(size => size.trim()))} 
          required
        />
        <label>
          <input
            type="checkbox"
            name="bestseller"
            checked={bestseller}
            onChange={(e) => setBestseller(e.target.checked)}
          />
          Best-seller
        </label>
        <label>
          <input
            type="checkbox"
            name="isDiscounted"
            checked={isDiscounted}
            onChange={(e) => setIsDiscounted(e.target.checked)}
          />
          En promotion
        </label>
        <input
          type="number"
          name="discountAmount"
          placeholder="Montant de la remise"
          value={discountAmount}
          onChange={(e) => setDiscountAmount(e.target.value)}
        />
        <label>
          <img src={image1 ? URL.createObjectURL(image1) : photo} alt="Image 1" />
          <input type="file" name="image1" onChange={(e) => setImage1(e.target.files![0])} hidden/>
        </label>
        <label>
          <img src={image2 ? URL.createObjectURL(image2) : photo} alt="Image 2" />
          <input type="file" name="image2" onChange={(e) => setImage2(e.target.files![0])} hidden/>
        </label>
        <button type="submit">Ajouter le produit</button>
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}

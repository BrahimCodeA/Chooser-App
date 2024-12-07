import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setProducts, deleteProduct } from "@/redux/slices/productSlice";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

export const useProductList = (
  token: string,
  category: string,
  bestSeller: boolean = false
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `${backendUrl}/api/product/list`;

        if (category) url += `?category=${category}`;
        if (bestSeller)
          url += category ? `&bestseller=true` : `?bestseller=true`;

        const response = await axios.get(url, {
          headers: { token },
        });

        dispatch(setProducts(response.data.products));
        console.log(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des produits", error);
      }
    };

    fetchProducts();
  }, [dispatch, token, category, bestSeller]);

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
      console.error("Error deleting product:", error);
    }
  };

  return { onDeleteHandler };
};

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setProducts, deleteProduct } from "../redux/slices/productSlice";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

export const useProductList = (token: string) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/product/list`, {
          headers: { token },
        });
        dispatch(setProducts(response.data.products));
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
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
      console.error("Error deleting product:", error);
    }
  };

  return { onDeleteHandler };
};

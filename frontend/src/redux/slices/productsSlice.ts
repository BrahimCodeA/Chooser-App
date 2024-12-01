import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Product = {
  _id: string;
  name: string;
  image: string[];
  description: string;
  price: number;
  bestseller: boolean;
  category: string;
  stock: number;
};

type ProductState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

// État initial
const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchBestSellerProducts = createAsyncThunk(
  "products/fetchBestSellerProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/product/list?bestseller=true");
      return response.data.products;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Une erreur est survenue"
      );
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBestSellerProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBestSellerProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchBestSellerProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;

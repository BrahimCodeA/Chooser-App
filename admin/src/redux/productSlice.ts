import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Product = {
    _id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    brand: string;
    sizes: string[];
    bestseller: boolean;
    isDiscounted: boolean;
    discountAmount: number;
    image: string[];
}

type ProductState = {
    products: Product[];
}

const initialState: ProductState = {
    products: [],
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<Product>) {
            state.products.push(action.payload);
        },
        deleteProduct(state, action: PayloadAction<string>) {
            state.products = state.products.filter(product => product._id !== action.payload);
        },
        setProducts(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
        },
    },
});

export const { addProduct, deleteProduct, setProducts } = productSlice.actions;
export default productSlice.reducer;
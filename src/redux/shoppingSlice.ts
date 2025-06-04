import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../type";

interface StoreState {
  productData: Products[];
  userInfo: null | { name: string; email: string; image: string };
  orderData: any[];
}

const initialState: StoreState = {
  productData: [],
  userInfo: null,
  orderData: [],
};

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push({ ...action.payload });
      }
    },
    increaseQuantity: (state, action: PayloadAction<{ _id: number }>) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) existingProduct.quantity++;
    },
    decreaseQuantity: (state, action: PayloadAction<{ _id: number }>) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
      }
     
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    addUser: (state, action: PayloadAction<{ name: string; email: string; image: string }>) => {
      state.userInfo = action.payload;
    },
    deleteUser: (state) => {
      state.userInfo = null;
    },
    saveOrder: (state, action: PayloadAction<any[]>) => {
      state.orderData = action.payload;
    },
    resetOrder: (state) => {
      state.orderData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  addUser,
  deleteUser,
  saveOrder,
  resetOrder,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;

import { createSlice, current } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
  value: [],
}

export const AddToCart = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log("🚀 ~ file: AddToCart.jsx:13 ~ state:", state.value)
      // Check Product exist or not 
      const existingItemIndex = state.value.findIndex(item => item.id === action.payload.id);
      if(existingItemIndex !== -1){
        state.value[existingItemIndex].quantity = state?.value[existingItemIndex].quantity + 1;
        toast.info("Product Quantity Updated");
      }else{
        state.value.push({...action.payload, quantity: 1})
        toast.info("Product Added");
      }
      sessionStorage.setItem("products", JSON.stringify(state.value))
      state.value = JSON.parse(sessionStorage.getItem("products"))
    },
    updateCardSession: (state, action) => {
      state.value = []
      action.payload.map((item) => {
        state.value.push(item)
      })      
    },
    increseCartItem: (state, action) => {
      const existingItemIndex = state.value.findIndex(item => item.id === action.payload.id);
      if(existingItemIndex !== -1){
        state.value[existingItemIndex].quantity = state?.value[existingItemIndex].quantity + 1;
        toast.info("Product Quantity Updated");
      }
      sessionStorage.setItem("products", JSON.stringify(state.value))
    },
    decreaseCartItem: (state, action) => {
      const existingItemIndex = state.value.findIndex(item => item.id === action.payload.id);
      if(existingItemIndex !== -1){
        if(state.value[existingItemIndex].quantity > 1){
          state.value[existingItemIndex].quantity = state?.value[existingItemIndex].quantity - 1;
          toast.info("Product Quantity Updated");
        }else{
          state.value[existingItemIndex].quantity = 1
          toast.info("Not Decrease Product Quantity!");
        }
        
      }
      sessionStorage.setItem("products", JSON.stringify(state.value))
    },
    removeProductFromCart: (state, action) => {
      // here remove item from list
      const items = current(state.value)
      const getItems = items.filter(item => item.id !== action.payload);
      state.value = getItems;
      toast.info("Item Deleted From Cart");
      sessionStorage.setItem("products", JSON.stringify(state.value))
    },
    clearAll: (state) => {
      state.value = [];
      toast.info("Cart Empty");
      sessionStorage.setItem("products", JSON.stringify(state.value))
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, updateCardSession, increseCartItem, decreaseCartItem, removeProductFromCart, clearAll } = AddToCart.actions

export default AddToCart.reducer
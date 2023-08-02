import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
  value: [],
}

export const AddToCart = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addItem: (state, action) => {
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { addItem, updateCardSession } = AddToCart.actions

export default AddToCart.reducer
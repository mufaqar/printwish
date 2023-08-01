import { createSlice } from '@reduxjs/toolkit'

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
      }else{
        state.value.push({...action.payload, quantity: 1})
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem } = AddToCart.actions

export default AddToCart.reducer
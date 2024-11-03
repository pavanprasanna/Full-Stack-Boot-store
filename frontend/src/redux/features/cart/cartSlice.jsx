import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'



const initialState = {
  cartItems : []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState :initialState,
  reducers: {
    addToCart : (state , action) =>{
        const existingItem = state.cartItems.find(item => item._id === action.payload._id);
        if(!existingItem) {
          state.cartItems.push(action.payload)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product Has been Added to Cart",
            showConfirmButton: false,
            timer: 1500
          });
        
        } else(
          Swal.fire({
            title: "Already Added to the Cart",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "OK!"
          })
      )
      },
      removeFromCart : (state , action) =>{
        state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
      },
      clearFromCart : (state , action) =>{
        state.cartItems = []
      }
  },
})

export const  {addToCart, removeFromCart, clearFromCart} = cartSlice.actions;
export default cartSlice.reducer;
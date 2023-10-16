import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  SUCCESS: "SUCCESS",
  ERROR: "error",
  Loading: "LOADING",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.SUCCESS,
  },
  reducers: {
    setproducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setproducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// middleware

export function fetchproducts(){
    return async function fetchproductThunk(dispatch){
        dispatch(setStatus(STATUS.Loading));
        try {

            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            dispatch(setproducts(data));
            dispatch(setStatus(STATUS.SUCCESS));
            
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}
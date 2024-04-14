//1.Create Slice

import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{
        isLoading:false,
        products:[],
        info:''
    },
    reducers:{
        handleAllProductAction:(state,action)=>{
            state.info=action.payload;
        },
        handleSingleProductAction:(state,action) =>{}
    }
}) 


export const {handleAllProductAction,handleSingleProductAction} = productSlice.actions
export default productSlice.reducer
//1.Create Slice

import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{
        isLoading:false,
        products:[],
        info:'',
        singleProduct:{}
    },
    reducers:{
        handleAllProductAction:(state,action)=>{
            state.info=action.payload  ;
        },
        handleSingleProductAction:(state,action) =>{
            state.singleProduct=action.payload
        }
    }
}) 


export const {handleAllProductAction,handleSingleProductAction} = productSlice.actions
export default productSlice.reducer
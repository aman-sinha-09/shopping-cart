import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    // reducers function input me 2 chiz lete hai -> state and action
    // jo bhi input parameters maine pass kiya hai usko access krne liye use action.payload, jaise yahan meine input me post pass kiya hai in product.jsx
    // jo bhi maine input parameters pass kiya hai na usko action payload darshata hai
    reducers: {
        add : (state,action)=>{
            state.push(action.payload)
        },
        remove : (state,action)=>{
            return state.filter( (item)=> item.id !== action.payload)
            // is state ke ander sirf vahi vali items ko save krna jo action input parameter me jo id aayi hai, uske equal na ho
        },
    },
})

export default cartSlice.reducer;
export const {add,remove} = cartSlice.actions;
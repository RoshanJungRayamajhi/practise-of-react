import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
}
const favouriteSlice = createSlice({
   name: 'favourite',
   initialState,
   reducers:{
    additems: (state,action)=>{
        state.items.push(action.payload);
    },
    removeitems:(state,action)=>{
        state.items.length=0;
    }
   }
})


export const {additems,removeitems} = favouriteSlice.actions;
export default favouriteSlice.reducer;
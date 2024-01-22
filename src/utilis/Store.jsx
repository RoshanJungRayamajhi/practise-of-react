import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favouriteSlice"


const Store =configureStore({
    reducer:{
        favourite: favouriteReducer,

    }
})

export default Store;
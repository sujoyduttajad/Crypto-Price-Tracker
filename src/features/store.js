import { configureStore } from "@reduxjs/toolkit";
import eacCoinReducer from "./eachCoinSlice"


export default configureStore({
    reducer: {
        eachCoin: eacCoinReducer,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./pages/user/userSlice";
import transReducer from "./pages/dashboard/transactionSlice"

const store = configureStore({
    reducer:{
        user:useReducer,
        transaction: transReducer,
    }
})

export default store 
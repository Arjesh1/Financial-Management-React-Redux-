import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./pages/user/userSlice";
import transReducer from "./pages/dashboard/transactionSlice"
import systemReducer from "./system/SystemSlice";

const store = configureStore({
    reducer:{
        user:useReducer,
        transaction: transReducer,
        system:systemReducer,
    }
})

export default store 
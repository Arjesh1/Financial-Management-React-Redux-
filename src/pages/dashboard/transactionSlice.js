import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    trans:{}
}

const transSlice = createSlice({
    name:'trans',
    initialState,
    reducers:{
        settrans : (state, action) => {
            state.trans = action.payload;
        }
    }

})

const{reducer, actions} = transSlice

export const {settrans} = actions

export default reducer
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    trans:[]
}

const transSlice = createSlice({
    name:'trans',
    initialState,
    reducers:{
        setTrans: (state, { payload }) => {
          if (!state.trans.length && !payload.length) return;
          state.trans = payload;
        },
      },

})

const{reducer, actions} = transSlice

export const {setTrans} = actions

export default reducer
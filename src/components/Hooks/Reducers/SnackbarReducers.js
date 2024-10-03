import { createSlice } from "@reduxjs/toolkit";

const SnackbarSlice = createSlice({
    name : "snackbar",
    initialState: {
        open : false,
        message : "",
        type : "success"
    },
    reducers : {
        showSnackbar :(state, action)=> {
            state.open = true,
            state.message = action.payload.message,
            state.type = action.payload.type
        },
        hideSnackbar : (state) =>{
            state.open = false
        }
    }
})

export const {hideSnackbar, showSnackbar} = SnackbarSlice.actions
export default SnackbarSlice.reducer
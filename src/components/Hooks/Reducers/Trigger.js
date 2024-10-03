import { createSlice } from "@reduxjs/toolkit";

const Trigger = createSlice({
    name: "Trigger",
    initialState:{
        isOpen : false
    },
    reducers:{
        openRoute : (state) => {
            state.isOpen = true
        },
        closeRoute : (state) => {
            state.isOpen = false
        }
    }
})

export const {openRoute, closeRoute} = Trigger.actions
export default Trigger.reducer
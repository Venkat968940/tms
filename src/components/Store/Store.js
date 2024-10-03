import { configureStore } from "@reduxjs/toolkit";
import Snackbar from "../Hooks/Reducers/SnackbarReducers";
import Trigger from "../Hooks/Reducers/Trigger";

export const store = configureStore({
    reducer:{
        snackbar : Snackbar,
        trigger : Trigger
    }
})
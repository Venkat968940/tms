import { useDispatch, useSelector } from "react-redux";
import { hideSnackbar } from "../Reducers/SnackbarReducers";
import { Alert, Snackbar } from "@mui/material";

export const CustomizedSnackbar = () => {
  const dispatch = useDispatch();
  const { open, message, type } = useSelector((state) => state.snackbar);

  const handleClose = () => {
    dispatch(hideSnackbar());
  };
// console.log(open, message, type, snackData)
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        variant="filled"
        severity={type}
        color={type}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

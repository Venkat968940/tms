import { Button, Grid2 } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showSnackbar } from "../../../components/Hooks/Reducers/SnackbarReducers";
import { CustomPassWord, CustomTextfield, } from "../../../components/Utils/CustomInput";
import { LoginValidation } from "../../../constants";
import { LoginTheme } from "../../../styles";

const Login = () => {
  const classes = LoginTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ValidationSchema = LoginValidation;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: handleLogin,
  });

  function handleLogin() {
    const { email, password } = formik.values;
    if (email === "admin@gmail.com" && password === "admin@123") {
        localStorage.setItem('token', "bearerToken")
      navigate("/dashboard");
      dispatch(showSnackbar({open: true, message: "Logged In Successfully", type: "success",}));
    } else {
      dispatch(showSnackbar({open: true, message: "Invalid Credential", type: "error",}));
    }
  }
  return (
    <Grid2 className={classes.root}>
      <Grid2 className={classes.mainRoot}>
        <CustomTextfield
          formik={formik}
          id="email"
          multiple={false}
          placeholder="Email Address"
          title="Email Address"
        />
        <CustomPassWord formik={formik} id="password" />
        <Button
          fullWidth
          variant="contained"
          sx={{ marginBlock: 2 }}
          onClick={formik.handleSubmit}
        >
          Login
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default Login;

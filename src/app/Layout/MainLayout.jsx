import { Grid2, Toolbar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { MainTheme } from "../../styles";
import Header from "../Header/Header";

const MainLayout = () => {
  const classes = MainTheme();
  return (
    <Grid2 className={classes.root}>
      <Header />
      <Toolbar variant="dense" />
      <Grid2 sx={{ height: "calc(100% - 48px)", padding:2 }}>
        <Outlet />
      </Grid2>
    </Grid2>
  );
};

export default MainLayout;

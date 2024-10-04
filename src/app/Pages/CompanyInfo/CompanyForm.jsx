import { Grid2 } from "@mui/material";
import React, { Fragment, useState } from "react";
import CustomizedStepper from "../../../components/Utils/CustomStepper/CustomStepper";
import { CompanyTheme } from "../../../styles";
import AboutCompany from "./AboutCompany";
import CompanyInfo from "./CompanyInfo";
import Products from "./Products";

const CompanyForm = () => {
  const classes = CompanyTheme();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Fragment>
      <Grid2 className={classes.root}>
        <CustomizedStepper activeStep={activeStep} />
        {activeStep === 0 ? (
          <CompanyInfo nextStep={setActiveStep} />
        ) : activeStep === 1 ? (
          <AboutCompany nextStep={setActiveStep} />
        ) : activeStep === 2 ? (
          <Products nextStep={setActiveStep} />
        ) : null}
      </Grid2>
    </Fragment>
  );
};

export default CompanyForm;

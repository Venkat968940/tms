import React, { Fragment, useEffect, useState } from "react";
import CompanyInfo from "./CompanyInfo";
import AboutCompany from "./AboutCompany";
import Products from "./Products";
import { Grid2, Stepper } from "@mui/material";
import CustomizedStepper from "../../../components/Utils/CustomStepper/CustomStepper";

const CompanyForm = () => {
  const [activeStep, setActiveStep] = useState(0);


  return (
<Fragment>
<Grid2 sx={{ height:"100%", maxWidth:750, margin:'0 auto', width:'fit-content', boxShadow:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);", padding:2,}}>
 <CustomizedStepper activeStep={activeStep}/>
{activeStep === 0 ? (
        <CompanyInfo nextStep={setActiveStep} />
      ) : activeStep === 1 ? (
        <AboutCompany nextStep={setActiveStep} />
      ) : activeStep === 2 ? (
        <Products nextStep={setActiveStep}/>
      ) : null}
</Grid2>
</Fragment>
  );
};

export default CompanyForm;

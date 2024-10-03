import { Help } from "@mui/icons-material";
import {
  Avatar,
  Button,
  FormHelperText,
  Grid2,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { Fragment, useState } from "react";
import {
  CustomdropDown,
  CustomTextfield,
} from "../../../components/Utils/CustomInput";
import { CompanyInfoValidation } from "../../../constants";

const CompanyInfo = ({ nextStep }) => {
  const [logo, setLogo] = useState(null);
  const ValidationSchema = CompanyInfoValidation;

  const formik = useFormik({
    initialValues: {
      companyName: "",
      address: "",
      country: null,
      city: "",
      postcode: "",
      countryCode: null,
      mobile: "",
      website: "",
      personName: "",
      designation: "",
      personCountryCode: null,
      personNumber: "",
      email: "",
      companyLogo: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: handleSave,
  });

  function handleSave() {
    nextStep(prev=>prev+1);
  }

  function handleLogo(e) {
    console.log(e.target.files);
  }
  return (
    <Fragment>
      <Grid2
        container
        sx={{ height: "calc(95% - 50px)", overflowY: "scroll", alignContent:"start" }}
      >
        <Grid2 size={{ xs: 12 }}>
          <Typography variant="h6">Basic Company Information</Typography>
        </Grid2>

        <Grid2 container size={{ xs: 12, sm: 6 }} spacing={1}>
          <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="companyName"
              multiple={false}
              placeholder="Name"
              title="Company Name"
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="address"
              multiple={false}
              placeholder="Street Number, House Number"
              title="Head Office Address"
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <CustomdropDown
              data={[]}
              formik={formik}
              id="country"
              onchange={(e, value) => {
                formik.setFieldValue("country", value);
              }}
              optionEqual={(option, value) => option.name === value.name}
              optionLabel={(option) => option.name}
              placeholder="Select an Option"
              title="Country"
            />
          </Grid2>
          <Grid2 size={{ xs: 4 }}>
            <CustomTextfield
              formik={formik}
              id="postcode"
              multiple={false}
              placeholder="Postal Code"
              title="Postal Code"
            />
          </Grid2>
          <Grid2 size={{ xs: 8 }}>
            <CustomTextfield
              formik={formik}
              id="city"
              multiple={false}
              placeholder="City Name"
              title="City"
            />
          </Grid2>

          <Grid2 size={{ xs: 4 }}>
            <CustomdropDown
              data={[]}
              formik={formik}
              id="countryCode"
              onchange={(e, value) => {
                formik.setFieldValue("countryCode", value);
              }}
              optionEqual={(option, value) => option.name === value.name}
              optionLabel={(option) => option.name}
              placeholder="Select an Option"
              title="Country Code"
            />
          </Grid2>
          <Grid2 size={{ xs: 8 }}>
            <CustomTextfield
              formik={formik}
              id="mobile"
              multiple={false}
              placeholder="Mobile Number"
              title="Contact Number"
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="website"
              multiple={false}
              placeholder="http://"
              title="Website URL"
            />
          </Grid2>

          <Grid2
            size={{ xs: 12 }}
            sx={{ display: "flex", alignItems: "center", marginBlock: 2 }}
          >
            <Typography variant="h6">Key Contact Person </Typography>
            <Help color="primary" sx={{ marginLeft: 1 }} />
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="personName"
              multiple={false}
              placeholder="Name"
              title="Name"
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="designation"
              multiple={false}
              placeholder="Designation"
              title="Designation"
            />
          </Grid2>

          <Grid2 size={{ xs: 4 }}>
            <CustomdropDown
              data={[]}
              formik={formik}
              id="personCountryCode"
              onchange={(e, value) => {
                formik.setFieldValue("personCountryCode", value);
              }}
              optionEqual={(option, value) => option.name === value.name}
              optionLabel={(option) => option.name}
              placeholder="Select an Option"
              title="Country Code"
            />
          </Grid2>
            <Grid2 size={{ xs: 8 }}>
              <CustomTextfield
                formik={formik}
                id="personNumber"
                multiple={false}
                placeholder="Mobile Number"
                title="Contact Number"
              />
            </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="email"
              multiple={false}
              placeholder="Email"
              title="Email"
            />
          </Grid2>
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid2>
            <Avatar
              variant="square"
              sx={{ height: 300, width: 300, marginBottom: 1 }}
            />
            <input type="file" onChange={(e) => handleLogo(e)} />
            <FormHelperText sx={{ color: "red" }}>
              {formik.touched.companyLogo && formik.errors.companyLogo}
            </FormHelperText>
          </Grid2>
        </Grid2>
      </Grid2>
      <Button
        variant="contained"
        sx={{ marginBlock: 1 }}
        onClick={formik.handleSubmit}
      >
        Continue
      </Button>
    </Fragment>
  );
};

export default CompanyInfo;

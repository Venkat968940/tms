import { Help } from "@mui/icons-material";
import {
  Button,
  Divider,
  Grid2,
  Typography
} from "@mui/material";
import { useFormik } from "formik";
import React, { Fragment, useState } from "react";
import {CustomdropDown, CustomMobile, CustomTextfield,} from "../../../components/Utils/CustomInput";
import FileUploader from "../../../components/Utils/Dropzone/FileUploader";
import {CompanyInfoValidation, CountryCode, PhoneCode,} from "../../../constants";
import { CompanyTheme } from "../../../styles";

const CompanyInfo = ({ nextStep }) => {
  const classes = CompanyTheme();
  const [previewImg, setPreviewImg] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
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
      companyLogo: [],
    },
    validationSchema: ValidationSchema,
    onSubmit: handleSave,
  });

  function handleSave() {
    nextStep((prev) => prev + 1);
  }
  return (
    <Fragment>
      <Grid2 container className={classes.layout}>
        <Grid2 size={{ xs: 12 }}>
          <Typography variant="h6">Basic Company Information</Typography>
        </Grid2>

        <Grid2 container size={{ xs: 12, sm: 6 }} spacing={1}>
          <Grid2 size={{ xs: 12 }}>
            <CustomTextfield formik={formik} id="companyName" multiple={false} placeholder="Name" title="Company Name" required={true}/>
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <CustomTextfield formik={formik} id="address" multiple={false}
              placeholder="Street Number, House Number"
              title="Head Office Address"
              required={true}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <CustomdropDown
              data={CountryCode}
              formik={formik}
              id="country"
              onchange={(e, value) => {
                formik.setFieldValue("country", value);
              }}
              optionEqual={(option, value) => option.name === value.name}
              optionLabel={(option) => option.name}
              placeholder="Select an Option"
              title="Country"
              required={true}
            />
          </Grid2>
          <Grid2 size={{ xs: 4 }}>
            <CustomTextfield
              formik={formik}
              id="postcode"
              multiple={false}
              placeholder="Postal Code"
              title="Postal Code"
              required={false}
            />
          </Grid2>
          <Grid2 size={{ xs: 8 }}>
            <CustomTextfield
              formik={formik}
              id="city"
              multiple={false}
              placeholder="City Name"
              title="City"
              required={true}
            />
          </Grid2>

          <Grid2 size={{ xs: 4 }}>
            <CustomdropDown
              data={PhoneCode}
              formik={formik}
              id="countryCode"
              onchange={(e, value) => {
                formik.setFieldValue("countryCode", value);
              }}
              optionEqual={(option, value) => option.country === value.country}
              optionLabel={(option) => option.code}
              placeholder="Select an Option"
              title="Country Code"
              required={true}
            />
          </Grid2>
          <Grid2 size={{ xs: 8 }}>
            <CustomMobile
              formik={formik}
              id="mobile"
              multiple={false}
              placeholder="Mobile Number"
              title="Contact Number"
              required={true}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="website"
              multiple={false}
              placeholder="http://"
              title="Website URL"
              required={false}
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
              required={true}
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="designation"
              multiple={false}
              placeholder="Designation"
              title="Designation"
              required={true}
            />
          </Grid2>

          <Grid2 size={{ xs: 4 }}>
            <CustomdropDown
              data={PhoneCode}
              formik={formik}
              id="personCountryCode"
              onchange={(e, value) => {
                formik.setFieldValue("personCountryCode", value);
              }}
              optionEqual={(option, value) => option.country === value.country}
              optionLabel={(option) => option.code}
              placeholder="Select an Option"
              title="Country Code"
              required={true}
            />
          </Grid2>
          <Grid2 size={{ xs: 8 }}>
            <CustomMobile
              formik={formik}
              id="personNumber"
              multiple={false}
              placeholder="Mobile Number"
              required={true}
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
              required={true}
            />
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }} sx={{ padding: 2 }}>
          <FileUploader
            formik={formik}
            previewImg={previewImg}
            setPreviewImg={setPreviewImg}
            isEdit={isEdit}
          />
        </Grid2>
      </Grid2>
      <Divider sx={{ marginBlock: 1 }} orientation="horizontal" />
      <Grid2 sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          sx={{ marginBottom: 1 }}
          onClick={formik.handleSubmit}
        >
          Continue
        </Button>
      </Grid2>
    </Fragment>
  );
};

export default CompanyInfo;

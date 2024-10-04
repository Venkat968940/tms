import { Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Card,
  Divider,
  Grid2,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { Fragment, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showSnackbar } from "../../../components/Hooks/Reducers/SnackbarReducers";
import { CustomTextfield } from "../../../components/Utils/CustomInput";
import { ProductsValidation } from "../../../constants";
import { CompanyTheme } from "../../../styles";

const Products = ({ nextStep }) => {
  const classes = CompanyTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const editRef = useRef(null);
  const ValidationSchema = ProductsValidation;

  const formik = useFormik({
    initialValues: {
      product_name: "",
      desc: "",
      website: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: isEdit ? handleUpdate : handleSave,
  });
  function handleSave() {
    const { product_name, desc, website } = formik.values;
    const arr = [...data];
    const objData = {
      pname: product_name,
      desc: desc,
      url: website,
    };

    arr.push(objData);
    setData(arr);
    setIsEdit(false);
    formik.resetForm();
  }

  function handleUpdate() {
    const { product_name, desc, website } = formik.values;
    const arr = [...data];
    const objData = {
      pname: product_name,
      desc: desc,
      url: website,
    };
    arr[activeId] = objData;
    setIsEdit(false);
    setData(arr);
    formik.resetForm();
  }

  function handleSubmit() {
    if (data.length > 0) {
      navigate("/dashboard");
      dispatch(
        showSnackbar({
          type: "success",
          message: "Created Successfully",
          open: true,
        })
      );
    } else {
      dispatch(
        showSnackbar({
          type: "error",
          message: "Add some products!",
          open: true,
        })
      );
    }
  }

  function handleDelete(i) {
    console.log(i);
    const arr = [...data];
    arr.splice(i, 1);
    setData(arr);
    formik.resetForm();
  }

  function handleEdit(e, id) {
    setActiveId(id);
    setIsEdit(true);
    editRef?.current?.focus();
    console.log(e);
    formik.setValues({
      desc: e?.desc,
      product_name: e?.pname,
      website: e?.url,
    });
  }
  return (
    <Fragment>
      <Grid2 container className={classes.layout}>
        <Grid2 container size={{ xs: 10 }}>
          <Grid2 size={{ xs: 12 }}>
            <Typography variant="h6">Show your product portfolio</Typography>
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <Typography variant="body1" marginBlock={1}>
              Product Name
            </Typography>
            <Grid2 sx={{ display: "flex" }}>
              <TextField
                id="product_name"
                value={formik.values.product_name}
                onChange={formik.handleChange}
                placeholder="Product Name"
                size="small"
                fullWidth
                autoComplete="off"
                error={
                  formik.touched.product_name &&
                  Boolean(formik.errors.product_name)
                }
                helperText={
                  formik.touched.product_name && formik.errors.product_name
                }
                inputRef={editRef}
              />
             <Typography fontSize={26} marginLeft={1} color={formik.touched.product_name && Boolean(formik.errors.product_name) ? "error" : "primary"}>*</Typography>
            </Grid2>
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="desc"
              multiple={true}
              placeholder="Brief portfolio description"
              title="Product Portfolio Description"
              required={false}
            />
          </Grid2>

          <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="website"
              multiple={true}
              placeholder="http://"
              title={`Facebook/ LinkedIn URL, Youtube Link etc.  `}
              required={false}
            />
          </Grid2>

          <Button
            variant="outlined"
            sx={{ margin: "0 auto", marginTop: 2 }}
            onClick={formik.handleSubmit}
          >
            {isEdit ? "Update Product" : "Add Product"}
          </Button>

          {data.length > 0 &&
            data.map((val, idx) => (
              <Grid2 size={{ xs: 12 }} sx={{ margin: 1 }} key={idx}>
                <Card>
                  <Grid2 sx={{ padding: 2 }}>
                    <Grid2 sx={{ display: "flex", justifyContent: "end" }}>
                      <IconButton onClick={() => handleEdit(val, idx)}>
                        <Edit fontSize="small" color="primary" />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(idx)}>
                        <Delete fontSize="small" color="error" />
                      </IconButton>
                    </Grid2>
                    <Typography sx={{ marginBlock: 1 }}>
                      Product Name : {val.pname}
                    </Typography>
                    <Typography sx={{ marginBlock: 1 }}>
                      Product Description : {val.desc}
                    </Typography>
                    <Typography sx={{ marginBlock: 1 }}>
                      Product URL : {val.url}
                    </Typography>
                  </Grid2>
                </Card>
              </Grid2>
            ))}
        </Grid2>
      </Grid2>
      <Divider orientation="horizontal" sx={{ marginBlock: 1 }} />
      <Grid2 sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          sx={{ marginRight: 1 }}
          onClick={() => nextStep((prev) => prev - 1)}
        >
          Back
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Save
        </Button>
      </Grid2>
    </Fragment>
  );
};

export default Products;

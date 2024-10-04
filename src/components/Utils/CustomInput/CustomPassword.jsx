import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Grid2, IconButton, TextField, Typography } from "@mui/material";
import React, { Fragment, memo, useState } from "react";

const CustomPassword = ({ formik, id, required }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Fragment>
      <Typography variant="body1" marginBlock={1}>Password</Typography>
   <Grid2 sx={{display:"flex"}}>
   <TextField
        required
        id={id}
        value={formik.values[id]}
        onChange={formik.handleChange}
        type={showPassword ? "text" : "password"}
        label="Password"
        fullWidth
        size="small"
        autoComplete="new-password"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          },
        }}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
       <Typography fontSize={26} marginLeft={1} color={formik.touched[id] && Boolean(formik.errors[id]) ? "error" : "primary"} sx={{visibility : required ? 'visible' : "hidden"}}>*</Typography>
   </Grid2>
    </Fragment>
  );
};

export default memo(CustomPassword);

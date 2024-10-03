import { Grid2, TextField, Typography } from '@mui/material'
import React, { Fragment, memo } from 'react'

const CustomTextField = ({ id, formik, title, multiple, placeholder, required }) => {
  return (
<Fragment>
<Typography variant='body1'marginBlock={1}>{title}</Typography>
 <Grid2 sx={{display:"flex"}}>
 <TextField 
     id={id}
    value={formik.values[id]}
    onChange={formik.handleChange}
     placeholder={placeholder}
     error={formik.touched[id] && Boolean(formik.errors[id])}
     helperText={formik.touched[id] && formik.errors[id]}
     size='small'
     fullWidth
    autoComplete="off"
     multiline={multiple}
     rows={4}
     inputProps={{
       maxLength: id==='mobile' || id==='phone' ? 10 : undefined,
     }}
    />
     <Typography fontSize={26} marginLeft={1} color='primary' sx={{visibility : required ? 'visible' : "hidden"}}>*</Typography>
 </Grid2>
</Fragment>
  )
}

export default memo(CustomTextField)
import { Grid2, TextField, Typography } from '@mui/material'
import React, { Fragment, memo } from 'react'

const CustomMobileField = ({ id, formik, title, multiple, placeholder, required }) => {
    const handleNumber = (e) =>{
        const inputValue = e.target.value.replace(/[^0-9]/g, '')
        formik.setFieldValue(`${id}`, inputValue)
    }
  return (
<Fragment>
<Typography variant='body1'marginBlock={1}>{title}</Typography>
 <Grid2 sx={{display:"flex"}}>
 <TextField 
     id={id}
    value={formik.values[id]}
    onChange={handleNumber}
     placeholder={placeholder}
     error={formik.touched[id] && Boolean(formik.errors[id])}
     helperText={formik.touched[id] && formik.errors[id]}
     size='small'
     fullWidth
    autoComplete="off"
     multiline={multiple}
     rows={4}
     inputProps={{
       maxLength:  10 ,
     }}
    />
     <Typography fontSize={26} marginLeft={1} color={formik.touched[id] && Boolean(formik.errors[id]) ? "error" : "primary"} sx={{visibility : required ? 'visible' : "hidden"}}>*</Typography>
 </Grid2>
</Fragment>
  )
}

export default memo(CustomMobileField)
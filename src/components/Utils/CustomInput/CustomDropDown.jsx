import { Autocomplete, Grid2, TextField, Typography } from '@mui/material'
import React, { Fragment, memo } from 'react'

const CustomDropDown = ({title, id, data, optionLabel, optionEqual, onchange,formik, placeholder,}) => {
  return (
<Fragment>
<Typography variant='body1' marginBlock={1}>{title}</Typography>
    <Autocomplete 
    id={id}
    name={id}
    size='small'
    options={data}
    fullWidth
    autoComplete={false}
    getOptionLabel={optionLabel}
    value={formik.values[id]}
    onChange={onchange}
    isOptionEqualToValue={optionEqual}
    renderInput={(params)=>(
        <TextField 
        {...params}
        autoComplete='off'
        placeholder={placeholder}
        fullWidth
        error={formik.touched[id] && Boolean(formik.errors[id])}
        helperText={formik.touched[id] && formik.errors[id]}
        />
    )}
    />
</Fragment>
  )
}

export default CustomDropDown
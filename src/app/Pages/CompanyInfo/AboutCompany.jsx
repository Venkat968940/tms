import { Button, Card, DialogActions, DialogContent, Grid2, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { AboutValidation } from '../../../constants'
import { useFormik } from 'formik'
import { CustomTextfield } from '../../../components/Utils/CustomInput'
import { Delete, Edit, Help } from '@mui/icons-material'
import TeamDetails from './TeamDetails'
import { useDispatch } from 'react-redux'
import { showSnackbar } from '../../../components/Hooks/Reducers/SnackbarReducers'

const AboutCompany = ({nextStep}) => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const ValidationSchema = AboutValidation

  const formik = useFormik({
    initialValues:{
      companyProfile : "",
      website : "",
      vision:""
    },
    validationSchema: ValidationSchema,
    onSubmit : handleSubmit
  })

  function handleSubmit(){
if(data.length > 0){
  nextStep(prev=>prev+1);
  console.log(formik.values)
}
else{
dispatch(showSnackbar({open:true, type:"error", message : "Team Details can't be empty"}))
}
  }
  return (
   <Fragment>
    <Grid2 container sx={{height :"calc(95% - 50px)", overflowY:"scroll",  alignContent:"start"}}>
    <Grid2 size={{ xs: 12 }}>
          <Typography variant="h6">Tell us more about yourself</Typography>
        </Grid2>
        <Grid2 container size={{ xs: 12, sm: 8 }} spacing={1}>
        <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="companyProfile"
              multiple={true}
              placeholder="Description (Max 200 words)"
              title="Brief Company Profile"
            />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="website"
              multiple={true}
              placeholder="http://"
              title={`Facebook/ LinkedIn URL, Youtube Link etc.`}
            />
        </Grid2>

        <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="vision"
              multiple={true}
              placeholder="Description (Max 200 words)"
              title="Vision / Mission"
            />
        </Grid2>
        <TeamDetails data={data} setData={setData}/>
        </Grid2>


    </Grid2>
    <Grid2 sx={{display:"flex", }}>
      <Button variant='outlined' sx={{marginRight:1}} onClick={()=> nextStep(prev=>prev-1)}>Back</Button>
      <Button variant='contained' onClick={formik.handleSubmit}>Continue</Button>
    </Grid2>
   </Fragment>
  )
}

export default AboutCompany
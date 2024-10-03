import { Button, Divider, Grid2, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { showSnackbar } from '../../../components/Hooks/Reducers/SnackbarReducers'
import { CustomTextfield } from '../../../components/Utils/CustomInput'
import { AboutValidation } from '../../../constants'
import TeamDetails from './TeamDetails'

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
    <Grid2 container sx={{height :"calc(95% - 50px)", overflowY:"scroll",  alignContent:"start", justifyContent:"center" }}>

        <Grid2 container size={{ xs: 11 }} >   
           <Grid2 size={{ xs: 12 }}>
          <Typography variant="h6">Tell us more about yourself</Typography>
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="companyProfile"
              multiple={true}
              placeholder="Description (Max 200 words)"
              title="Brief Company Profile"
              required={true}
            />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="website"
              multiple={false}
              placeholder="http://"
              title={`Facebook/ LinkedIn URL, Youtube Link etc.`}
              required={false}
            />
        </Grid2>

        <Grid2 size={{ xs: 12 }}>
            <CustomTextfield
              formik={formik}
              id="vision"
              multiple={true}
              placeholder="Description (Max 200 words)"
              title="Vision / Mission"
              required={false}
            />
        </Grid2>
        <TeamDetails data={data} setData={setData}/>
        </Grid2>


    </Grid2>
    <Divider orientation='horizontal' sx={{marginBlock:1}}/>
    <Grid2 sx={{display:"flex", justifyContent: 'space-between' }}>
      <Button variant='outlined' sx={{marginRight:1}} onClick={()=> nextStep(prev=>prev-1)}>Back</Button>
      <Button variant='contained' onClick={formik.handleSubmit}>Continue</Button>
    </Grid2>
   </Fragment>
  )
}

export default AboutCompany
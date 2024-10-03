import React, { Fragment, useRef, useState } from 'react'
import { MemberValidation } from '../../../constants'
import { useFormik } from 'formik'
import { Button, Card, Divider, Grid2, IconButton, TextField, Typography } from '@mui/material'
import { CustomTextfield } from '../../../components/Utils/CustomInput'
import { Delete, Edit, LinkedIn } from '@mui/icons-material'

const TeamDetails = ({data, setData}) => {
    const [isEdit, setIsEdit] = useState(false)
    const [activeId, setActiveId] = useState(null)
    const editRef = useRef(null)
    const ValidationSchema = MemberValidation

    const formik = useFormik({
        initialValues : {
            emp_name : "",
            emp_designation:"",
            emp_profile:"",
            linkedinLink:""
        },
        validationSchema : ValidationSchema,
        onSubmit : isEdit ? updateMember : handleMember
    })

    function handleMember(){
        const {emp_designation, emp_name, emp_profile, linkedinLink} = formik.values
        const arr=[...data]
        const objData = {
            employee_name : emp_name,
            employee_designation : emp_designation,
            profile : emp_profile,
            linkedinLink : linkedinLink
        }
        arr.push(objData)
        setData(arr)
        setIsEdit(false)
        formik.resetForm();
    }

    function updateMember(){
      const {emp_designation, emp_name, emp_profile, linkedinLink} = formik.values
      const arr=[...data]
      const objData = {
          employee_name : emp_name,
          employee_designation : emp_designation,
          profile : emp_profile,
          linkedinLink : linkedinLink
      }
      arr[activeId] = objData
      setData(arr)
      setIsEdit(false)
      formik.resetForm();
    }
    function handleEdit(e, id){
      setActiveId(id)
        setIsEdit(true)
        editRef?.current?.focus()
        console.log(e)
        formik.setValues({
           emp_designation : e.employee_designation,
           emp_name : e.employee_name,
           emp_profile: e.profile,
           linkedinLink : e.linkedinLink
        })
    }

  function handleDelete(e){
    const arr=[...data]
    arr.splice(e, 1);
    setData(arr);
  }
  return (
   <Fragment>
        <Grid2 size={{xs:12}}>
      <Typography variant='h6' sx={{marginBlock:1}}>Management Team Details</Typography>
    </Grid2>
    <Grid2 size={{xs:12}}>
    <Typography variant="body1" marginBlock={1}>Name</Typography>
<Grid2 sx={{display:"flex"}}>
<TextField
              id="emp_name"
              value={formik.values.emp_name}
              onChange={formik.handleChange}
              placeholder="Employee Name"
              size="small"
              fullWidth
              autoComplete="off"
              error={formik.touched.emp_name && Boolean(formik.errors.emp_name)}
              helperText={formik.touched.emp_name && formik.errors.emp_name}
              inputRef={editRef}/>
              <Typography fontSize={26} marginLeft={1} color='primary'>*</Typography>
</Grid2>
    </Grid2>
    <Grid2 size={{xs:12}}>
        <CustomTextfield formik={formik} id="emp_designation" multiple={false} placeholder="Designation" title="Designation"required={true}/>
    </Grid2>  
    <Grid2 size={{xs:12}}>
        <CustomTextfield formik={formik} id="emp_profile" multiple={true} placeholder="Description (Max 200 words)" title="Profile Summary"required={false}/>
    </Grid2> 
    <Grid2 size={{xs:12}}>
        <CustomTextfield formik={formik} id="linkedinLink" multiple={false} placeholder={`Profile Link`} title="LinkedIn Profile"required={false}/>
    </Grid2>
    

<Button variant='outlined' sx={{margin:'0 auto', marginTop : 2}} onClick={formik.handleSubmit}>{isEdit ? "Update Member"  : "Add Member"}</Button>

{data?.length > 0 && 
data.map((val,idx)=>(
        <Grid2 sx={{ margin: 1 }} size={{xs:12}}key={idx}>
  <Card >
  <Grid2 sx={{ padding: 2 }}>
    <Grid2 sx={{ display: "flex", justifyContent: "end" }}>
      <IconButton onClick={()=> handleEdit(val, idx)}>
        <Edit fontSize="small" color="primary" />
      </IconButton>
      <IconButton onClick={()=>handleDelete(idx)}><Delete fontSize="small" color="error"/></IconButton>
    </Grid2>
    <Typography sx={{ marginBlock: 1 }}>
      Name :  {val?.employee_name}
    </Typography>
    <Typography sx={{ marginBlock: 1 }}>
      Designation : {val?.employee_designation}
    </Typography>
    <Typography sx={{ marginBlock: 1 }}>
      Profile Summary : {val?.profile}
    </Typography>
    <Typography sx={{ marginBlock: 1 }}>
      LinkedIn Profile : {val?.linkedinLink}
    </Typography>
  </Grid2>
</Card>
        </Grid2>
))
  }
   </Fragment>
  )
}

export default TeamDetails
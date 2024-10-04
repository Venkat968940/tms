import { Backspace } from '@mui/icons-material';
import { Avatar, Button, FormHelperText, Grid2, IconButton, Typography, useTheme } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const FileUploader = ({formik, previewImg, setPreviewImg, isEdit}) => {
  const theme = useTheme();
  const [edit, setEdit] = useState(false)

  const { acceptedFiles, getInputProps, getRootProps, fileRejections } = useDropzone({
    onDrop: (acceptedFiles) => {
      const imgData = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      formik.setFieldValue("companyLogo", imgData)
      setEdit(true)
    },
    accept: {
      'image/*': [],
    },
    multiple: false,
    maxFiles: 1,
    maxSize: 2097152, // 2 MB in bytes
  });

  const files = acceptedFiles.map((file) => (
    <Grid2 key={file.path}>
      <Typography textAlign="center">
        {file.path} - {Number(file.size / 1048576).toFixed(2)} MB
      </Typography>
    </Grid2>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <Grid2 key={file.path}>
      {errors.map((e) => (
        <Typography textAlign="center" color={theme.palette.error.main} key={e.code}>
          {e.code === 'file-too-large'
            ? 'Maximum upload file size: 2 MB'
            : e.code === 'file-invalid-type'
            ? '.jpg, .jpeg, .png files only supported'
            : e.message}
        </Typography>
      ))}
    </Grid2>
  ));

  const validateImg = (
    <FormHelperText  sx={{ color: theme.palette.error.main, textAlign:"center" }}>
      {formik.touched.companyLogo && formik.errors.companyLogo}
    </FormHelperText>
  );

  function handleClear(e){
    formik.setFieldValue("companyLogo", []);
    setEdit(false);
    setPreviewImg(null);
  }



  console.log((isEdit && previewImg !== null) || edit, "ISEdit", isEdit, previewImg, edit, formik.values?.companyLogo)
  return (
 <Fragment> 
  {previewImg!=null ? (
    <Avatar variant='square' sx={{width:250, height: 300, margin:'0 auto'}} src={`${previewImg}`}/>
  ) : edit ? (
    <Avatar variant='square'  sx={{width:250, height: 300, margin:'0 auto'}}src={formik.values?.companyLogo[0]?.preview}/>
  ) : <Avatar variant="square" sx={{width:250, height: 300, margin:'0 auto'}}/>}
  {/* <Avatar variant='rounded' sx={{width:250, height: 300, margin:'0 auto'}} src={image?.preview}/> */}
      <Grid2 sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
   
       <Grid2   sx={{marginBlock:2, display:"flex"  }}>
        <input {...getInputProps()} style={{ display: 'none' }} />
        <Button variant="contained" size='small' color="primary" disabled={(isEdit && previewImg !== null)} {...getRootProps()}> 
          Upload
        </Button>
      </Grid2>  
      {isEdit && previewImg != null || edit && <IconButton onClick={handleClear}><Backspace /></IconButton>}
      
      </Grid2>  
      {formik.values.companyLogo!==null && files}
      {fileRejectionItems=="" ? validateImg : fileRejectionItems}  
 </Fragment>
  );
};

export default FileUploader;

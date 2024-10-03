import { Avatar, Button, Grid2, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const FileUploader = () => {
  const theme = useTheme();
  const [image, setImage] = useState(null)

  const { acceptedFiles, getInputProps, getRootProps, fileRejections } = useDropzone({
    onDrop: (acceptedFiles) => {
      const imgData = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setImage(imgData[0])
      console.log(imgData[0]); // You can use this imgData for further processing
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
      <Typography>
        {file.path} - {Number(file.size / 1048576).toFixed(2)} MB
      </Typography>
    </Grid2>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <Grid2 item key={file.path}>
      {errors.map((e) => (
        <Typography color={theme.palette.error.main} key={e.code}>
          {e.code === 'file-too-large'
            ? 'Maximum upload file size: 2 MB'
            : e.code === 'file-invalid-type'
            ? '.jpg, .jpeg, .png files only supported'
            : e.message}
        </Typography>
      ))}
    </Grid2>
  ));

  return (
    <Grid2 >
        <Grid2>
    <Avatar variant='rounded' sx={{width:400, height: 300,}} src={image?.preview}/>
        </Grid2>
      <Grid2  {...getRootProps()} sx={{ width: '100%', }}>
        <input {...getInputProps()} style={{ display: 'none' }} />
        <Button variant="contained" color="primary">
          Upload
        </Button>
      </Grid2>
      <Grid2>
        {files}
      </Grid2>
      <Grid2>
        {fileRejectionItems}
      </Grid2>
    </Grid2>
  );
};

export default FileUploader;

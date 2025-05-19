import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form'

export default function BasicTextFields() {
    const {label,placeholder,name,control} = props
  return (

    <Controller
    name = {name}
    control = {control}
    render = {({
        field:{onChange,value},
        fieldState:{error},
        formState,
    })=>{
            <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <TextField id="standard-basic" label={label} variant="standard" />
    </Box>
    }}/>

  );
}

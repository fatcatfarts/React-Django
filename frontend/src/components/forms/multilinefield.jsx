import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form' 

export default function MultilineTextFields() {
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
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField
          id="standard-multiline-static"
          label={label}
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
          placeholder={placeholder}
        />
      </div>
    </Box>
    }}/>

  );
}







    //   <div>
    //     <TextField
    //       id="outlined-multiline-flexible"
    //       label="Multiline"
    //       multiline
    //       maxRows={4}
    //     />
    //     <TextField
    //       id="outlined-textarea"
    //       label="Multiline Placeholder"
    //       placeholder="Placeholder"
    //       multiline
    //     />
    //     <TextField
    //       id="outlined-multiline-static"
    //       label="Multiline"
    //       multiline
    //       rows={4}
    //       defaultValue="Default Value"
    //     />
    //   </div>
    //   <div>
    //     <TextField
    //       id="filled-multiline-flexible"
    //       label="Multiline"
    //       multiline
    //       maxRows={4}
    //       variant="filled"
    //     />
    //     <TextField
    //       id="filled-textarea"
    //       label="Multiline Placeholder"
    //       placeholder="Placeholder"
    //       multiline
    //       variant="filled"
    //     />
    //     <TextField
    //       id="filled-multiline-static"
    //       label="Multiline"
    //       multiline
    //       rows={4}
    //       defaultValue="Default Value"
    //       variant="filled"
    //     />
    //   </div>
    //   <div>
    //     <TextField
    //       id="standard-multiline-flexible"
    //       label="Multiline"
    //       multiline
    //       maxRows={4}
    //       variant="standard"
    //     />
    //     <TextField
    //       id="standard-textarea"
    //       label="Multiline Placeholder"
    //       placeholder="Placeholder"
    //       multiline
    //       variant="standard"
    //     />
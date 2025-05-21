import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form'

export default function BasicTextFields(props) {
    const {label,width,placeholder,name,control} = props
  return (

    <Controller
    name = {name}
    control = {control}
    render = {({
        field:{onChange,value},   // name is a unique identifier, control gives us control to to the cpomponnent, 
        // onchange is like set state and value is like the value of the const
        fieldState:{error},
        formState,
    })=>{
      return(                           //in a function return like this ()=> {} if we use curly brackets, then we need to put a return statement in it
         <>
   
      <TextField sx={{width:width}}
       id="outlined-basic" label={label} variant="outlined" placeholder={placeholder}
       value={value } //this is done cuz value is undefiened(uncontrolled) and then changes to controlled later on which is not allowed
       onChange={onChange}
       />
    </>)
    }}/>

  );
}

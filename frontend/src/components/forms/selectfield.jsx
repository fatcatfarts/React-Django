import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Controller} from 'react-hook-form'

export default function SelectVariants(props) {
  const {label,width,name,control} = props
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <>
      <FormControl variant="filled" sx={{ width:{width},marginTop:'20px'}}>
        <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
          <Controller
    name = {name}
    control = {control}
    render = {({
        field:{onChange,value},
        fieldState:{error},
        formState,
    })=>(
      
        <Select
          sx={{width:{width}}}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={value }
          onChange={onChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'started'}>started</MenuItem>
          <MenuItem value={'working'}>working</MenuItem>
          <MenuItem value={'ended'}>ended</MenuItem>
        </Select>
        )}/>

      </FormControl>
    </>
  );
}

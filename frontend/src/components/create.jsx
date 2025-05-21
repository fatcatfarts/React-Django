import React from 'react'
import {Box, Typography,Button} from '@mui/material'
import BasicDatePicker from './forms/datepicker'
import MultilineTextFields from './forms/multilinefield'
import SelectVariants from './forms/selectfield'
import BasicTextFields from './forms/textfield'
import {useForm} from 'react-hook-form'
import AxiosInstance from './axios'
import dayjs from 'dayjs'

const Create=()=>{
    const defaults = {name:'',comments:'',status:''
    }
    const {handleSubmit,reset,setValue,control} = useForm({defaultValues:defaults})

    
const submission = (data) => {
    const Start_date = dayjs(data['start date'].$d).format('YYYY-MM-DD');
    const End_date = dayjs(data['end date'].$d).format('YYYY-MM-DD');

    AxiosInstance.post('project/', {
        name: data.name,
        comments: data.comments,
        status: data.status,
        start_date: Start_date,
        end_date: End_date
    })
    .then(response => {
        console.log("Success:", response.data);
    })
    .catch(error => {
        console.log("Error response:", error.response.data);    
    });
}

    //      {
    //     const modify = {name:data.name,status:data.status,comments:data.comments,startdate:`${data['start date'].$y}-${(data['start date'].$M + 1)}-${data['start date'].$D}`}
    //     return console.log(modify)
    // }
    

    return (
     
        <form onSubmit={handleSubmit(submission)}>
        <Box sx={{display:'flex', width:'100%', backgroundColor:"grey",marginBottom:'10px',textAlign:'center'}}>
            <Typography sx={{marginLeft:'20px',color:'darkblue'}}>
                Create records
            </Typography>

        </Box>

        <Box sx={{display:'flex', width:'100%', boxShadow:3,padding:4, flexDirection:'column'}}>
        <Box sx={{textAlign:'center',display:'flex', justifyContent:'space-around'}}>
            <BasicTextFields
            label="name"
            width = '30%'
            placeholder='your name'
            name="name"
            control={control}
            
            />

            <BasicDatePicker
            label = 'start date'
            width = '30%'
            name = 'start date'
            control = {control}
            />
           <BasicDatePicker
            label = 'end date'
            width = '30%'
            name = 'end date'
            control = {control}
            />

        </Box>
        <Box sx={{textAlign:'center',display:'flex', justifyContent:'center'}}>
            <MultilineTextFields
            label="comments"
            width = '40%'
            name="comments"
            control={control}
            placeholder='your comments'
            />

            <SelectVariants
            label = 'status'
            width = '40%'
            name = 'status'
            control = {control}
            />

        </Box>

        </Box>
        <Button variant="contained" type='submit' sx={{width:'100%'}}>Submit</Button>
        </form>
  
    )
}
export default Create
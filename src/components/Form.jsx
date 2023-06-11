import React from 'react'
import {updateForm} from "../Slice/loginSlice"
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState} from "react"
import { useSelector } from 'react-redux'
import {CSVLink, CSVDownload} from 'react-csv';




const Form = () => {


    const data = useSelector((state)=> {

        return state.loginReducer.data

    })

    const dispath = useDispatch()

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));


      const [formInputs,setFormInputs] = useState({
        username:"",contact:"",requirement:"",from:"",to:""
      })

      const onhandleChange = (event) => {

        setFormInputs({...formInputs,[event.target.name]:event.target.value})

      }

      const onClickSubmit = () => {


        dispath(updateForm(formInputs))
      }

      const selections = [{
        options:"",
        value:"Choose"
      },

    
      {
        options:"urgent",
        value:"Urgent"
    
      },

      {
        options:"non urgent",
        value:"Non Urgent"
    
      }]






  return (
    <div style={{textAlign:"center"}}>
<div style={{margin:'auto', width:"65vw",marginTop:"30px",display:"flex",justifyContent:"space-around"}}>


<label htmlFor="">Name</label>


        <input type="text"  onChange= {onhandleChange} name = "username" value={formInputs.username}/>

        <label htmlFor="">Contact</label>

        <input type="number"  onChange= {onhandleChange} name = "contact" value={formInputs.contact}/>

        <label htmlFor="">Requirement</label>

        <select name="requirement" id="" onChange= {onhandleChange}>
                {
                    selections.map((ele)=> {

                       return  <option key={ele.options} value={ele.value}>

                            {ele.value}

                            </option>
                    })
                }
        </select>


        


        <label htmlFor="">From</label>


        <input style = {{width:"60px"}}type="number"  onChange= {onhandleChange} name = "from"/>

        <label htmlFor="">To</label>


        <input style = {{width:"60px"}}type="number"  onChange= {onhandleChange} name = "to"/>

        </div>

        
        <Button style = {{marginTop:"20px"}}variant="contained" onClick = {onClickSubmit}>Submit</Button>

        <div style={{marginTop:"80px"}}>


        <CSVLink data = {data}>
        <Button style = {{marginBottom:"10px", float:"right", marginRight:"10px"}}variant="contained">Export</Button>

        </CSVLink>
            

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Contact</StyledTableCell>
            <StyledTableCell align="right">Requirement</StyledTableCell>
            <StyledTableCell align="right">Range</StyledTableCell>
          </TableRow>
        </TableHead>


        <TableBody>

        {

            data.map((ele)=> {

            
return (

    <StyledTableRow>


<TableCell align="left">{ele.username}</TableCell>
                        <TableCell align="right">{ele.contact}</TableCell>
                        <TableCell align="right">{ele.requirement}</TableCell>
                        <TableCell align="right">`{ele.from} to {ele.to}`</TableCell>




 
                        </StyledTableRow>
)

})
        }

        
                </TableBody>

      </Table>
    </TableContainer>


        </div>


        

    </div>
  )
}

export default Form
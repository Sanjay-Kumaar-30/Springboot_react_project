import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState } from "react";
import './style.css';

import axios from 'axios';
import { useLocation } from 'react-router-dom';
function EditUser() {
    const location=useLocation()
    const [bikeId, setBikeId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [bikeVariant, setBikeVariant] = useState("");
    const [bikeColor, setBikeColor] = useState("");
    const [paymentMode, setpaymentMode] = useState("");
    
    
    
 
    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post('http://localhost:8080/customer',
        {
        id:location.state.id,
        bikeId:bikeId,
        customerName:customerName,
        bikeVariant:bikeVariant,
        bikeColor:bikeColor,
        paymentMode:paymentMode,
           });
          alert("YOUR BIKE IS UPDATED:)");
          
          setBikeId("");
          setCustomerName("");
          setBikeVariant("");
          setBikeColor("");
          setpaymentMode("");
          
        
        }
    catch(err)
        {
          alert("Failed:(");
        }
   }
  return (
    <>

    <div class="form">
    <center>
    <h1>CUSTOMER ID : {location.state.id}</h1>
    <br></br>
      <Box
      component="form"
      sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
        noValidate
        autoComplete="on"
        >
      <div>
        
        <TextField
          id="outlined-password-input"
          label="Bike ID"
          placeholder='Enter your bike id'
          value={bikeId}
          onChange={(event) =>
            {
              setBikeId(event.target.value);      
            }}
        />
        <br>
        </br>
        <TextField
          id="outlined-password-input"
          label="Customer Name"
          placeholder='Enter your name'
          value={customerName}
          onChange={(event) =>
            {
              setCustomerName(event.target.value);      
            }}
        />
        <br>
        </br>
        <TextField
          id="outlined-password-input"
          label="Bike Variant"
          placeholder='Enter your bike variant'
          value={bikeVariant}
          onChange={(event) =>
            {
              setBikeVariant(event.target.value);      
            }}
          />
          <br>
          </br>

        <TextField
          id="outlined-password-input"
          label="Bike Color"
          placeholder='Enter your bike color'
          value={bikeColor}
          onChange={(event) =>
            {
              setBikeColor(event.target.value);      
            }}
        />
        <br>
        </br>
        <TextField
          id="outlined-password-input"
          label="Payment Mode"
          placeholder='Enter the payment mode'
          value={paymentMode}
          onChange={(event) =>
            {
              setpaymentMode(event.target.value);      
            }}
        />
        <br>
        </br>
        <b>
    <button onClick ={save}>UPDATE</button>
    
    </b>
            </div>
    </Box>
    {/* <button
    onClick={()=>{
      navigate("/home")
    }}
    >VIEW ORDERS</button> */}
    
    </center>
    </div>
    </>
  );
}

export default EditUser;
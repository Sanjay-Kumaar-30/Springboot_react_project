import axios from "axios";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function ViewUser() {
    const location = useLocation();
    const[user,setUser]=useState();
    useEffect(() => {
        axios.get(`http://localhost:8080/customer/${location.state.id}`)
        .then((resp)=>{
            console.log(resp.data)
            setUser(resp.data)
        })
    }, []);
    return ( 
        <>
{user&&
        <>
        <h3>Id:{user.id}</h3>
        <h3>BikeId : {user.bikeId}</h3>
        <h3>Customer Name : {user.customerName}</h3>
        <h3>Bike Variant : {user.bikeVariant}</h3>
        <h3>Bike Color : {user.bikeColor}</h3>
        <h3>Payment Mode : {user.paymentMode}</h3>
        </>}
        </>
     );
}

export default ViewUser;
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const[user,setUser]=useState();
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:8080/customer')
        .then(res=>{
            setUser(res.data)
            console.log(res.data)
        })
    },[])
    return ( 
        <>{user&&<>
        <table>
            <tr>
                <th>Order id</th>
                <th>Customer Name</th>
                <th>Payment Mode</th>
                <th>VIEW</th>
                <th>DELETE</th>
                <th>EDIT</th>
            </tr>
            <tbody>
                {
                    user.map(e=>
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.customerName}</td>
                        <td>{e.paymentMode}</td>
                        <td><button className='btn btn-primary' 
                onClick={()=>navigate('/view',{state:{id:e.id}})}
                >VIEW</button></td>
                        <td><button onClick={()=>{
                            axios.delete(`http://localhost:8080/customer/${e.id}`)
                            .then(r=>{
                                alert("Deleted")
                            })
                        }}>DELETE</button></td>
                        <td><button className='btn btn-success'
                onClick={()=>navigate('/edituser',{state:{id:e.id}})}>EDIT</button></td>

                    </tr>
                        )
                }
            </tbody>
        </table>
        </>}</>
     );
}

export default Home;
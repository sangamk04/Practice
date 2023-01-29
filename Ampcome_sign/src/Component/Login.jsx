import React, { useState } from 'react'
import img from "../assets/Annotation1.png";
import "../Style/Login.css"
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
const [destination,setdestination] = useState("")
     const navigate=useNavigate()
    const submit= (e) =>{
    
    //   console.log(e.destination)
   const object={
    user:destination
   }
   console.log(object);

      localStorage.setItem("user",JSON.stringify(object))
       object.user===""?alert("Invalid Credential"):navigate("/dash")
      
    }
  return (
    <div className='MainContainer'>
        <div className='LoginDash'>
            <div className='LoginDashDetails'>
                    <h2>Welcome to App Name</h2>
                    <p>Get ahead of the curve join next generation of health heroes</p>
                    <img src={img} alt="" />
            </div>
        </div>
        <div className='LoginDetails'>
            <div className='LoginDetailsdata'>
                <h3>Sign-into your account</h3>
                <input type="text" required onChange={(e)=>setdestination(e.target.value)} placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <select name="" id="">
                <option value="">Select Unit Name</option>
                    <option value="">212</option>
                    <option value="">212</option>
                   
                </select>
                
                <input onClick={submit} type="submit" id='login' value="sign in"/>
            </div>
        </div>
    </div>
  )
}

export default Login
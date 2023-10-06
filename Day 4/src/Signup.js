import React, { useState } from 'react'
import "./Login.css"
import {Link} from 'react-router-dom'

function Signup() {
  const[firstname,setfirstname]=useState('');
  const[lastname,setlastname]=useState('');
  const[email,setemail]=useState('');
  const[phoneno,setphoneno]=useState('');
  const[username,setusername]=useState('');
  const[password,setpassword]=useState('');
  let handleSubmit=(event)=>{
  if(firstname.length===0||lastname.length===0||email.length===0||phoneno.length===0||username.length===0||password.length===0){
    alert("Enter All fields")
  }
}
  return (
    <div id="body">
    <div className='form'>
    <div className='box'>
    <div className='header'>
    <h1>Create an Account</h1>
    </div>
    <form>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text"  onChange={(e)=>setfirstname(e.target.value)} placeholder="First Name" />
      </div>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text" onChange={(e)=>setlastname(e.target.value)}  placeholder="Last Name" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder="Email" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="tel"  onChange={(e)=>setphoneno(e.target.value)} placeholder="Phoneno" />
      </div>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text" onChange={(e)=>setusername(e.target.value)} placeholder="Username" />
      </div>
      <div className="input">
        <i className="fa-solid fa-lock"></i>
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
      </div>
      <input className="signup-btn" onClick={handleSubmit} type="submit" value="SIGN UP" /> 
      
      </form>
      <p> <Link to={"/login"}style={{textDecoration:'none'}}> Already have an account? Login</Link></p>
      </div>
      </div>
      </div>
      )
    }
    
    export default Signup;
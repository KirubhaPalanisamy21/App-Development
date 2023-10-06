import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom';

function Login() {
    const[username,setUsername]=useState("");
    const[pwd,setPassword]=useState("");
    // const navigate=useNavigate();
    const formHandler=(event)=>{ 
      event.preventDefault();
      if(username.length===0){
        alert("Enter Username")
      }
      else if(pwd.length===0){
        alert("Enter Password")
      }
      else if(username!=="User"||pwd!=="User@1234"){
        alert("Wrong Username! Or Password")
      }
   
}
return (
<div id="body">
<div className="form">
<div className="box">
  <div className="header">
    <h2>Login</h2>
  </div>

  <form>
    <div className="input">
      <i className="fa-solid fa-user"></i>
      <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
    </div>
    <div className="input">
      <i className="fa-solid fa-lock"></i>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
    </div>
    <input className="signup-btn" onClick={formHandler} type="submit" value="LOGIN" />
  </form>
<p> <Link to={"/"} style={{textDecoration:'none'}} > No Account? Signup Now!</Link></p>
  
</div>
</div>
</div>
)
}

export default Login;
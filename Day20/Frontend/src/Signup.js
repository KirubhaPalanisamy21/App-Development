import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'


function Signup() {
  const nav=useNavigate();
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[conPassword,setConPassword]=useState('');
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    conPassword: '',
    terms: '',
  });


  const handleInputChange = (field, value) => {
    setFormErrors({ ...formErrors, [field]: '' });
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'conPassword':
        setConPassword(value);
        break;
      default:
        break;
    }
  };

  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (name.length === 0) {
      errors.name = 'Name is required';
    }

    if (email.length === 0) {
      errors.email = 'Email is required';
    }

    if (password.length === 0) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    if (conPassword.length === 0) {
      errors.conPassword = 'Confirm Password is required';
    } else if (password !== conPassword) {
      errors.conPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({
        name: '',
        email: '',
        password: '',
        conPassword: '',
        terms: '',
      });

      
      const user = {
        email,
        password: password, 
        role: 'USER',
        name,
      };

      console.log("user data",user)
      axios.post('http://localhost:8080/auth/register', user, {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
        alert("User Registered! Kindly Login to proceed")
        console.log("Response from user",response)
        nav("/login")
        
      })
      .catch(error => {
        console.log(error);
      alert(error.response)
      });
      
    }
  };

  return (
    <div>
    <section>
    
    <div class="contentBx">
        <div class="formBx">
            <h2 id="font">SignUp</h2>
            <br></br><br/>
            <form>
                
                <div class="inputBx">
                    <span> Name</span>
                    <input type="text"
                    name="Name"
                    onChange={(e) => handleInputChange('name', e.target.value)} placeholder="Name"/>
                    {formErrors.name && <p className="error">{formErrors.name}</p>}
                </div>
                <div class="inputBx">
                    <span>Email</span>
                    <input type="email"
                    name="email"
                    onChange={(e) => handleInputChange('email', e.target.value)}   placeholder="Email" />
                    {formErrors.email && <p className="error">{formErrors.email}</p>}
                </div>
                <div class="inputBx">
                    <span>Password</span>
                    <input type="password"
                    name="password"
                    onChange={(e) => handleInputChange('password', e.target.value)} placeholder="Password" />
                    {formErrors.password && <p className="error">{formErrors.password}</p>}
                </div>
                <div class="inputBx">
                    <span>Confirm Password</span>
                    <input type="password"
                    name="confirm password"
                    onChange={(e) => handleInputChange('conPassword', e.target.value)} placeholder="Confirm Password" />
                    {formErrors.conPassword && (<p className="error">{formErrors.conPassword}</p>)}
                </div>
               
                <div class="inputBx">
                    <input 
                    onClick={validate}
                    type="submit"
                    value="Sign Up"/>
                </div>
                <div class="inputBx">
                    <p>Already have an Account? <Link to="/login">Login</Link>
                    
                    </p>
                </div>
            </form>
            
        </div>
    </div>
</section>
    </div>
  )
}

export default Signup
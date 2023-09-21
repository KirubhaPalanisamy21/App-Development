import React,{ useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Login() {
  const [Email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const nav=useNavigate();
  const validate=(e)=>{
    e.preventDefault();
    if(Email.length===0||pass.length===0)
    {
      alert("Enter All fields")
    }
    else{
      nav("/")
    }
  }


  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  console.log(users);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const {  email, password } = formData;

    const userExists = users.some((user) => user.email === email);
    const user = users.find((user) => user.email === email);
    localStorage.setItem("users",JSON.stringify(user));
    console.log(user);
    if (user.password !== password) {
      alert("Invalid password");
      return; 
    }
    if (userExists.password === password) {
      console.log("Login Successful");
      return; 
    }
    navigate('/dashboard');
  };

  return (
    <div>
    <section>
    <div class="imgBx">
    <img alt='img' src="https://t3.ftcdn.net/jpg/04/19/98/82/360_F_419988231_YcqRjexNKhqSJclhRJfIhH4kPvFHN3Um.jpg"/>
</div>
    <div class="contentBx">
        <div class="formBx">
       
            <br></br><h2 id="font">Login</h2>
            <br/>
            <br></br>
            <form>
                <div class="inputBx">
                    <span>Username</span>
                    <input type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}/>
                </div>
                <div class="inputBx">
                    <span>Password</span>
                    <input type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}/>
                </div>
               <br></br>
                <div class="inputBx">
                    <input type='submit' onClick={handleLogin} value='Login'/>
                </div>
                </form>
                <div class="inputBx">
                    <p>Don't have an account?<Link to="/">Signup</Link> </p>
                </div>
            
        </div>
    </div>
</section>
    </div>
  )
}

export default Login
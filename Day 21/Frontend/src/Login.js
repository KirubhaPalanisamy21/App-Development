import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
//import { useDispatch } from 'react-redux';
import { setRole, setToken, setemail } from "./LocalStorage";
import axios from "axios";

function Login() {
  const nav = useNavigate("");
  //const dispatch=useDispatch("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (email.length === 0) {
      errors.email = "Email is required";
    }

    if (password.length === 0) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({
        email: "",
        password: "",
      });

      const userCredentials = {
        email: email,
        password: password,
      };
      axios
        .post("http://localhost:8086/auth/login", userCredentials)
        .then((response) => {
          const token = response?.data?.token;
          if (token) {
            setToken(token);
            setemail(userCredentials.email);
            const userType = response?.data?.role;
            setRole(userType);
            if (userType === "USER") {
              nav("/home");
            } else if (userType === "PHOTOGRAPHER") {
              nav("/profile");
            } else if (userType === "ADMIN") {
              nav("/dashboard");
            } else {
              alert("Invalid user role");
            }
          } else {
            alert("Invalid token. Please try again.");
          }
        })
        .catch((error) => {
          alert(error?.response?.data);
        });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors({ ...formErrors, email: "" });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: "" });
  };
  return (
    <div>
      <section>
        <div class="contentBx">
          <div class="formBx">
            <br></br>
            <h2 id="font">Login</h2>
            <br />
            <br></br>
            <form>
              <div class="inputBx">
                <span>Username</span>
                <input
                  type="text"
                  name="username"
                  onChange={handleEmailChange}
                  placeholder="Email"
                />
                {formErrors.email && (
                  <p className="error">{formErrors.email}</p>
                )}
              </div>
              <div class="inputBx">
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  onChange={handlePasswordChange}
                  placeholder="Password"
                />
                {formErrors.password && (
                  <p className="error">{formErrors.password}</p>
                )}
              </div>
              <br></br>
              <div class="inputBx">
                <input onClick={validate} type="submit" value="Login" />
              </div>
            </form>
            <div class="inputBx">
              <p>
                Don't have an account?<Link to="/">Signup</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;

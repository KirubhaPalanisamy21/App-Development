import React, { useEffect, useState } from "react";
import "./Home.css";
import './Sidebar.css'
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";

// import {logo} from './image/logo.jpeg'

export default function Home() {
  // const username =
  //   JSON.parse(localStorage.getItem("users")).username || "dummy";
  const nav=useNavigate();
  const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    msg: '',
    sub: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/contact/post',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + window.localStorage.getItem('jwtToken'),
          },
        }
      );

      if (response.status === 200) {
        // Handle success, e.g., show a success message or redirect
        console.log('Contact submitted successfully');
      } else {
        // Handle errors, e.g., display an error message
        console.error('Error submitting contact form');
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
    <Sidebar/>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Collins Orlando | Portfolio</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Maitree|Montserrat|Calligraffitti|Playfair+Display|Sahitya|Source+Sans+Pro|Ubuntu"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a
              className="navbar-brand lg-position"
              
              target="_blank"
            >
              
    <div className="menu-wrap">
    <input type="checkbox" className="toggler" />
    <div className="hamburger">
      <div />
    </div>
    
  </div>
 
            </a>
          </div>
          
          <div>
            <div className="collapse navbar-collapse tab-right" id="myNavbar">
              <ul className="ul">
                <li className="pull-right">
                  <a href="#contact">Contact</a>
                </li>
                <li className="pull-right">
                  <a href="#portfolio">Collections</a>
                </li>
                <li className="pull-right">
                  <a href="#about">About</a>
                </li>
                <li className="pull-right">
                  <a href="#home">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/*Home Page*/}
     
      <div id="home">
        <div className="home-page">
          <div className="block text-center">
            <h1 className="style-name">TRAVEL</h1>
            <h3 className="style-description">
            LET'S EXPLORE THE WORLD TOGETHER!
              <br />
              <h2>Welcome!!!</h2>
            </h3>
            <div className="btnList text-center">
              <a
                className="btn btn-twitter btn-lg"
                href="https://twitter.com/home"
                target="_blank"
              >
                <i className="fa fa-twitter fa-fw" />
                Twitter
              </a>
              <a
                className="btn btn-linkedin btn-lg"
                href="https://www.linkedin.com/feed/?trk=homepage"
                target="_blank"
              >
                <i className="fa fa-linkedin fa-fw" />
                LinkedIn
              </a>
              <a
                className="btn btn-github btn-lg"
                href="https://github.com/KirubhaPalanisamy21/App-Development"
                target="_blank"
              >
                <i className="fa fa-github fa-fw" />
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*End Of Home Page*/}
      {/*About Page*/}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-style">
              <h2>
                <strong>About Us</strong>
              </h2>
              <hr />
            </div>
          </div>
          <div className="row about-style">
            <div className="col-md-12 text-center about-info">
              <h2>
                Capturing Moments, Creating Memories: Our Love Affair with
                Travel Photography
              </h2>
              <br />
              <br />
              <h2>
                we're passionate about two things: travel and photography. Our
                mission is to inspire your wanderlust and help you navigate the
                world's most captivating destinations through stunning imagery
                and expert guidance. Join us on this journey of exploration, one
                click at a time.
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/*End Of Home Page*/}
      {/*Portfolio Page*/}
      <div id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-style">
              <h2>
                <strong>My Collections</strong>
              </h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 portfolio-item">
              {/*Portfolio 1*/}
              <img
                src="https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="img-responsive"
                alt="#"
              />
            </div>
            <div className="col-sm-4 portfolio-item">
              {/* Portfolio 2 */}
              <img
                src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="img-responsive"
                alt="#"
              />
            </div>
            <div className="col-sm-4 portfolio-item">
              {/*Portfolio 3 */}
              <img
                src="https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMxfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                className="img-responsive"
                alt="#"
              />
            </div>
            <div className="col-sm-4 portfolio-item">
              {/*Portfolio 4 */}
              <img
                src="https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                className="img-responsive"
                alt="#"
              />
            </div>
            <div className="col-sm-4 portfolio-item">
              {/*Portfolio 5 */}
              <img
                src="https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                className="img-responsive"
                alt="#"
              />
            </div>
            <div className="col-sm-4 portfolio-item">
              {/*Portfolio 6 */}
              <img
                src="https://images.unsplash.com/photo-1520483601560-389dff434fdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEyfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                className="img-responsive"
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="contact">
        <div className="container2">
          <div className="row">
            <div className="col-lg-12 text-center text-style">
              <h2>
                <strong>Contact Us</strong>
              </h2>
              <hr />
            </div>
          </div>
          <div className="wrapper">
            <form onSubmit={handleSubmit}>
              <div className="ccform">
                <div className="ccfield-prepend">
                <span className="ccform-addon">
                <i className="fa fa-user fa-2x" />
              </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="place-holder"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  /><br/><br/>
                  <div className="ccfield-prepend"></div> 
                  <span className="ccform-addon">
                  <i className="fa fa-envelope fa-2x" />
                </span>
                  <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="place-holder"
                  value={formData.email}
                  onChange={handleChange}
                  required
                /><br/><br/>
                <div className="ccfield-prepend"></div> 
                <span className="ccform-addon">
                <i className="fa fa-mobile-phone fa-2x" />
              </span>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="place-holder"
                  value={formData.phone}
                  onChange={handleChange}
                /><br/><br/>
                <div className="ccfield-prepend"></div> 
                <span className="ccform-addon">
                  <i className="fa fa-info fa-2x" />
                </span>
                <input
                  type="text"
                  name="sub"
                  placeholder="Subject"
                  className="place-holder"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                /><br/><br/>
                <div className="ccfield-prepend"></div> 
                <span className="ccform-addon">
                <i className="fa fa-comment fa-2x" />
              </span>
                <textarea
                  name="msg"
                  rows="6"
                  placeholder="Message"
                  className="place-holder"
                  value={formData.message}
                  onChange={handleChange}
                  required
                /><br/><br/>
  
                </div>
                <button type="submit" className="ccbtn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div id="footer">
        <div className="container footer-position">
          <div className="row">
            <div className="col-md-12">
              <span>@Travel Photography and Destination Guidance</span>
            </div>
            <Link to="/terms">
              <div
                className="terms"
                style={{ textDecoration: "none", color: "black" }}
              >
                Terms and Condition
              </div>
            </Link>
            <Link to="/condition">
              {" "}
              <div
                class="condition"
                style={{ textDecoration: "none", color: "black" }}
              >
                Privacy & Policy
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Home.css";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
// import {logo} from './image/logo.jpeg'

export default function Home() {
  const username =
    JSON.parse(localStorage.getItem("users")).username || "dummy";

  return (
    <div>
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
              href="https://youtube.com"
              target="_blank"
            >
              <Link to="/dashboard">Menu</Link>
            </a>
          </div>
          <div>
            <div className="collapse navbar-collapse tab-right" id="myNavbar">
              <ul className="ul">
                <li className="pull-right">
                  <a href="#contact">Contact</a>
                </li>
                <li className="pull-right">
                  <a href="#portfolio">My Collections</a>
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
              Dare to live the life you've always wanted.
              <br />
              <h2>Welcome!!!{username}</h2>
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
              <p>
                Capturing Moments, Creating Memories: Our Love Affair with
                Travel Photography
              </p>
              <br />
              <br />
              <p>
                we're passionate about two things: travel and photography. Our
                mission is to inspire your wanderlust and help you navigate the
                world's most captivating destinations through stunning imagery
                and expert guidance. Join us on this journey of exploration, one
                click at a time.
              </p>
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
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center text-style">
              <h2>
                <strong>Contact Me</strong>
              </h2>
              <hr />
            </div>
          </div>
          <div className="wrapper">
            <form method="post" className="ccform">
              <div className="ccfield-prepend">
                <span className="ccform-addon">
                  <i className="fa fa-user fa-2x" />
                </span>
                <input
                  className="ccformfield"
                  type="text"
                  placeholder="Full Name"
                  required=""
                />
              </div>
              <div className="ccfield-prepend">
                <span className="ccform-addon">
                  <i className="fa fa-envelope fa-2x" />
                </span>
                <input
                  className="ccformfield"
                  type="text"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div className="ccfield-prepend">
                <span className="ccform-addon">
                  <i className="fa fa-mobile-phone fa-2x" />
                </span>
                <input
                  className="ccformfield"
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <div className="ccfield-prepend">
                <span className="ccform-addon">
                  <i className="fa fa-info fa-2x" />
                </span>
                <input
                  className="ccformfield"
                  type="text"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="ccfield-prepend">
                <span className="ccform-addon">
                  <i className="fa fa-comment fa-2x" />
                </span>
                <textarea
                  className="ccformfield"
                  name="comments"
                  rows={6}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="ccfield-prepend submit">
                <input className="ccbtn" type="submit" defaultValue="Submit" />
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
              <div className="terms">Terms and Condition</div>
            </Link>
            <Link to="/condition">
              {" "}
              <div class="condition">Privacy & Policy</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react'
import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';
export default function Sidebar() {


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
  return (


    <div><>
    <div className="area" />
    <nav className="main-menu">
      <ul>
        <li>
          <a href="https://jbfarrow.com">
            <i className="fa2 fa-home fa-2x" />
            <span className="nav-text">Community Dashboard</span>
          </a>
        </li>
        <li className="has-subnav">
          <a>
            <i className="fa2 fa-globe fa-2x" />
            <span className="nav-text">Global</span>
          </a>
        </li>
        <li className="has-subnav">
          <a>
            <i className="fa2 fa-comments fa-2x" />
            <span className="nav-text">
            <Link to ='/faq'>FAQ</Link></span>
          </a>
        </li>
        <li className="has-subnav">
          <a href>
            <i className="fa2 fa-camera-retro fa-2x" />
            <span className="nav-text">
            <Link to ='/Account'>SAMPLE PROFILE</Link></span>
          </a>
        </li>
        
        
        <li>
          <a href>
            <i className="fa2 fa-cogs fa-2x" />
            <span className="nav-text">
            <Link to ='/place'>PHOTO &amp; PLACE</Link></span>
          </a>
        </li>
        <li>
          <a>
            <i className="fa2 fa-map-marker fa-2x" />
            <span className="nav-text">
            <Link to ='/Feedback'>FEEDBACK</Link></span>
          </a>
        </li>
        <li>
          <a>
            <i className="fa2 fa-info fa-2x" />
            <span className="nav-text">
            <Link to ='/dashboard'>DASHBOARD</Link></span>
          </a>
        </li>
      </ul>
      <ul className="logout">
        <li>
          <a>
            <i className="fa2 fa-power-off fa-2x" />
            <span className="nav-text">
        
            <Link to ='/login'>Logout</Link></span>
          </a>
        </li>
      </ul>
    </nav>
  </>
  </div>
  )
}

import React from 'react'
import "./Dashboard.css"
import Chart from "./Chart"
import Piechart from './Pie'
import Table from './Table'
import { Link } from 'react-router-dom'

export default function Dashboard() {

  return (
    <div>
   
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div />
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>
              <Link to="/home">Home</Link>
              </li>
             
              <li>
              <Link to="/place">Details</Link>
              </li>
              <li>
              <Link to="/FAQ">FAQ</Link>
              </li>
              <li>
                <Link to="/">LogOut</Link>
               

         </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   
    <header className="showcase">
    <Table/>
    <Chart/>
    <Piechart/>
      
    </header>
  </div>
  )
}

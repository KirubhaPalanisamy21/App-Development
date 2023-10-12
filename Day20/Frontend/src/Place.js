import React from 'react'
import "./Place.css"
import { Link } from 'react-router-dom'

export default function Place() {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n    /* Trick to take away default browser styles */\n    * {\n      margin:20px ;\n      padding: 15px;\n      box-sizing: 1%;\n    }\n\n    body {\n      background-color: white;\n      font-family: Verdana, Geneva, Tahoma, sans-serif;\n    }\n    \n    a:unvisited{\n      color:white;\n    }\n    a:visited{\n      color:white;\n    }\n\n    #header {\n      background-color: white;\n      padding: 20px;\n      width: 20%;\n      border-radius: 190px;\n      margin: auto;\n      margin-top: -100px;\n    }\n\n    #header h1 {\n      color: black;\n font-style:block;\n      text-align: center;\n    }\n\n    #menu-container {\n      background-color: white;\n      width: 190%;\n      margin: auto;\n      margin-top: 50px;\n      border-radius: 30px;\n      padding: 1px;\n      text-align: justify;\n      /* For Spacing Menu items Out */\n    }\n\n    .menu-item {\n      background-color:#898e90;\n      color:black;\n font-size:1px;    \n      padding: 10px;\n      border-radius: 5px;\n      max-width: 24%;\n      min-width: 40px;\n      display: inline-block;\n      margin-top: 1px;\n    }\n\n    #menu-container {\n      content: "";\n      width: 100%;\n      /* Ensures there are at least 2 lines of text, so justification works */\n      display: inline-block;\n    }\n    img {\n      width: 210px;\n    }\n    a {\n      Font-size: 15px;\n      Color: white;\n    }\n    .menu-item h2 {\n      font-size: 29px;\n      color: black;\n    }\n\n    .menu-item p {\n      font-size: 25px;\n      padding: 1px ;\n    }\n\n    p.cost {\n      font-size: 16px;\n    }\n  '
    }}
  />
  {/* The Header Section*/}
  <div id="header">
    <h1>DETAILS </h1>
  </div>
  {/* Close Header Section */}
  <div id="menu-container">
    {/* Menu Container*/}
    {/* Menu Item 1*/}
    <div className="menu-item">
      <h2>SINGAPORE</h2>
      <a href="https://www.willflyforfood.net/the-first-timers-travel-guide-to-singapore/" target="_blank">
        {" "}
        <Link to='/det'>About</Link>{" "}
      </a>
      <p>Singapore</p>
      <img
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg"
        alt="My Suitcase Journeys"
      />
    </div>
    {/* Close Menu Item 1*/}
    {/* Menu Item 2*/}
    <div className="menu-item">
      <h2>FRANCE</h2>
      <a
        href="https://www.foodnetwork.com/recipes/food-network-kitchen/baked-alaska-recipe-2125603"
        target="_blank"
      >
        {" "}
       <Link to='/det'>About</Link>{" "}
      </a>
      <p>Paris</p>
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg"
        alt="My Suitcase Journeys"
      />
    </div>
    {/* Close Menu Container 2*/}
    {/*  Menu Item 3*/}
    <div className="menu-item">
      <h2>RUSSIA</h2>
      <a
        href="https://www.allrecipes.com/recipe/21412/tiramisu-ii/"
        target="_blank"
      >
        {" "}
        About{" "}
      </a>
      <p>Moscow</p>
      <img
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg"
        alt="My SuitCase Journey"
      />
    </div>
    {/* Close Menu Container 3*/}
    
    {/*  Menu Item 5*/}
    <div className="menu-item">
      <h2>CZECHREPUBLIC</h2>
      <a
        href="https://www.allrecipes.com/recipe/22749/the-best-banana-pudding/"
        target="_blank"
      >
        {" "}
        About{" "}
      </a>
      <p>Prague</p>
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg"
        alt="My Secret Journey"
      />
    </div>
    {/* C lose  Menu Item 5*/}
    {/*  Menu Item 4*/}
    <div className="menu-item">
      <h2>NETHERLANDS</h2>
      <a
        href="https://www.foodnetwork.com/recipes/southern-red-velvet-cake-recipe-2011892"
        target="_blank"
      >
        {" "}
        About{" "}
      </a>
      <p>Amsterdam</p>
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg"
        alt="My Secret Journey"
      />
    </div>
    {/* Close Menu Container 4*/}
  </div>
  {/* Close Menu Container*/}
</div>

  )
}

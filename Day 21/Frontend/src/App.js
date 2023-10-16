import "./App.css";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./Signup";

import Home from "./Home";
import Dashboard from "./Dashboard";
import Place from "./Place";
import Details from "./Details";
import Faq from "./Faq";

import Terms_condition from "./Terms_condition";
import Privacypolicy from "./Privacypolicy";
import Homen from "./Homen";
import Sidebar from "./Sidebar";
import Account from "./Account";
import Feedback from "./Feedback";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/place" element={<Place />} />
        <Route path="/det" element={<Details />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms" element={<Terms_condition />} />
        <Route path="/condition" element={<Privacypolicy />} />
        <Route path="/n" element={<Homen />} />
        <Route path="/Side" element={<Sidebar />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Feedback" element={<Feedback />} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;

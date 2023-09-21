import './App.css';
 import Login from './Login';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Signup from './Signup';

import Dashboard from './Dashboard';
import Home from './Home';


function App() {
  return (
<BrowserRouter>

<Routes>
<Route path="/"element={<Signup/>}/>
<Route path="/login"element={<Login/>}/>
<Route path="/dashboard"element={<Dashboard/>}/>
<Route path="/home"element={<Home/>}/>
</Routes>

</BrowserRouter>
    );
  }
  
  export default App;
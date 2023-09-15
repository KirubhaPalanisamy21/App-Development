import './App.css';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
     </BrowserRouter>
   
    </div>
    );
  }
  
  export default App;
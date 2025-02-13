import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './ProductDetail';
import Navbar from './component/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const[authenticate,setAuthenticate]=useState(false)
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>

      </Routes>
    </div>
  );
}

export default App;

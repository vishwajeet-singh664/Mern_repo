import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Form from './components/Login';
import  Home  from './components/Home';
import About  from './components/About';
import Blog  from './components/Blog';
import Product  from './components/Product';
import Contact  from './components/Contact';
import Cart from './components/Cart';
//import Header from './components/Header';
// import Webfont from "webfontloader";
// import { useEffect } from 'react';

 

function App() {
  

  return (
    <div>
       <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/blog" element={<Blog/>}/>
          <Route exact path="/product" element={<Product/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          
          
       </Routes>
    <Form></Form>
   <Navbar></Navbar>
  
   </div>
  );
}

export default App;

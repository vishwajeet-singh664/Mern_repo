import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbar from './components/Navbar';
// import Form from './components/Login';
import store from "./store";
import { useSelector } from "react-redux";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Cart from "./component/Cart/Cart";
import  Home  from './components/Home';
import About  from './components/About';
import Blog  from './components/Blog';
import Product  from './components/Product';
import Contact  from './components/Contact';
import Cart from './components/Cart/Cart';
import Sidebar from './components/Sidebar/Sidebar';
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
    {/* <Form></Form> */}
   {/* <Navbar></Navbar> */}
   <Cart></Cart>
   <Sidebar></Sidebar>
  
   </div>
  );
}

export default App;

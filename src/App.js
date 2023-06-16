<<<<<<< HEAD
<<<<<<< HEAD
// import Header from "./components/layout/Header/Header.jsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
// import Loader from "./components/Loader/Loader.jsx";
// import Footer from "./components/layout/Footer/Footer.jsx";
// import ProductDetails from "./components/Product/ProductDetails.jsx"
import LoginSignup from "./component/User/LoginSignup";
import Home from "./component/Home/Home";
import store from "./store"
import { loadUser } from "./actions/userAction";
import { useDispatch, useSelector } from "react-redux";

import Profile from "./component/User/Profile.jsx"
// import ProtectedRoute from "./components/Route/ProtectedRoute";
import Shipping from "./component/Cart/Shipping.jsx"
import ConfirmOrder from "./component/Cart/ConfirmOrder.jsx"
import OrderSuccess from "./component/Cart/OrderSuccess";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";
import Contact from "./component/layout/Contact/Contact";
import MyOrders from "./component/Order/MyOrder.jsx"


function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    // store.dispatch(loadUser());
  },[]);


  return (
    <>
      <Router> 
        
        {/* <Header/> */}
        {/* {isAuthenticated && <UserOptions user={user} />}  */}
        <Routes> 
      
      
       <Route  path="/" element={<Home />} /> 
       <Route  path="/about" element={<About />} /> 
       <Route  path="/notfound" element={<NotFound />} /> 
       <Route  path="/contact" element={<Contact />} /> 
       {/* <Route path='/sad' element={<Loader />} />  */}
       
       <Route path="/login" element={<LoginSignup/>} />
       <Route path="/orders" element={<MyOrders/>} />
      
       {/* <ProtectedRoute path="/account" element={<Profile/>} /> */}
       {/* <Route path="/shipping" element={<Shipping/>} /> */}
       {/* <Route path="/order/confirm" element={<ConfirmOrder/>} /> */}
       {/* <ProtectedRoute path="/me/update" element={<UpdateProfile/>} /> */}
       {/* <Route  path="/success" element={<OrderSuccess/>} /> */}

       {/* <Route path="/useroption" element={<UserOptions/>} /> */}

       {/* <Route path='/product/:id' element={<ProductDetails />} />  */}
       </Routes>
      </Router> 
    

      
    </>
  );
}

=======
import './App.css';
import Metadata from './component/layout/Metadata';
import Home from './component/Home/Home';

import {Routes,Route} from 'react-router-dom'
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import NewProduct from './component/admin/NewProduct';
// import { Dashboard } from '@material-ui/icons';
function App() {
  return  (
     <>

   <Routes>
      <Route path='/' element={ <Home/>}/>
     
  <Route path='/products/:keyword' element={<Products/>}/>
  <Route path='product/:id' element={<ProductDetails/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/newproduct' element={<NewProduct/>}/>
   </Routes>

    </>
  );
}
>>>>>>> origin/prsanjeet
=======
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

>>>>>>> origin/mansii
export default App;

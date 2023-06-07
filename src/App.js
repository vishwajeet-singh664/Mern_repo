// import Header from "./components/layout/Header/Header.jsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Loader from "./components/Loader/Loader.jsx";
// import Footer from "./components/layout/Footer/Footer.jsx";
// import ProductDetails from "./components/Product/ProductDetails.jsx"
import LoginSignup from "./components/User/LoginSignup";
import Home from "./components/Home/Home";


function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  });
  return (
    <>
      <Router>
        <Routes> 
      
      
       <Route  path="/" element={<Home />} /> 
       <Route path='/sad' element={<Loader />} /> 
       
       <Route path="/login" element={<LoginSignup/>} />

       {/* <Route path='/product/:id' element={<ProductDetails />} />  */}
       </Routes>
      </Router> 
    

      
    </>
  );
}

export default App;

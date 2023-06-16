//  import React from 'react'
// import {useState} from 'react';
// import './form.css';
// function Form(){
//     const [inputarr,SetInputarr]=useState([])
//     const [inputdata,SetInputdata]=useState({
//         username:"",
//         password:""
//     })
// function changehandle(e){
//     SetInputdata({...inputdata,[e.target.name]:e.target.value})
// }
// let {username,password}=inputdata;
// function changeHandle(){
//     SetInputarr([...inputarr,username,password])
//     console.log(inputarr)
//     console.log(inputdata)
//     SetInputdata({username:"", password:""})
// }
// return(
//     <div className='LoginForm'>
//         <h1>Login here</h1>
//         <input type='text' autoComplete='off' name='username' value={inputdata.username} placeholder='Enter Username'onChange={changehandle}/><br></br>
//         <input type='text' autoComplete='off' name='password' value={inputdata.password} placeholder='Enter Password'onChange={changehandle}/><br></br>

    
//         <button onClick={changeHandle} className="btn btn-outline-success">Login</button>
//         <button onClick={changeHandle} className="btn btn-outline-success">Sign Up</button>
//     </div>

// );
// }
// export default Form
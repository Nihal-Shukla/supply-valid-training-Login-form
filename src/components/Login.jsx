import React, { Component } from 'react';
// import "./Login.css";
import "./Login.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


function Login() {
  return (
    <>
      <div className="container">

     
<div className="form">
  <div className='image-box'>
  <img style={{width: "100%", marginRight:"100",  borderTopRightRadius: '25px'}} src="./Images/img-6.png" alt="" />
  </div>
  <h2>Logdy</h2>
 

<p className='text'>Sign Into Your Account</p>
<span className='placeholder-logo'> <FontAwesomeIcon icon={faEnvelope} /></span>
<input className='input-field' type="email" Email placeholder='Enter Email Id'/>
<hr />
<span className='placeholder-logo'> <i class="fa-solid fa-unlock-keyhole"></i></span>
<input className='input-field' type="password" placeholder='Password' />
<hr />
<div className="checkbox-section">
  <div className='remb-section'>
    <span><input style={{height:"18px" , width:"20px"}} type="checkbox" /></span>
    <span style={{marginLeft:"10px"}}>Remember Me</span>
  </div>
  <div className='remb-section'>
    <span>Forgot Your Password?</span>
  </div>
</div>


<div className='login'><p>Login</p></div>

<div className="icon">
    <div className="box"><FontAwesomeIcon icon={faInstagram} /></div>
    <div className="box">
    <FontAwesomeIcon icon={faTwitter} />
    </div>
    <div className="box">
    <i class="fa-brands fa-linkedin-in"></i>
    </div>
    <div className="box"><i class="fa-brands fa-codepen"></i></div>
</div>

<p className='dont'>Dont have an account ? Register here </p>
</div>
</div>
</>
  )
}
export default Login

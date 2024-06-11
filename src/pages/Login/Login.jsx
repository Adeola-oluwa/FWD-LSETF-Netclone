import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'

const Login = () => {

  const[signState, setSignState] = useState("Sign In")
  return (
    <>
    <div className="main">
    <div>
      <img src={logo} className='login-logo' alt="" /> 
      </div>
      <div className="login-form">
        <h1  className='sign'>{signState}</h1>
        <form>
          {signState==="Sign Up"?
          <input type="text" placeholder='Your name' />:<></>}
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password'/>
          <button className='btn'>{signState}</button>
          <div className="form-help">
            <div className='remember'>
              <input type='checkbox'></input>
              <label htmlFor=''>Remember Me</label>
            </div>
            <div className="help"
            ><p>Need Help ?</p>
            </div>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?
          <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:<p>Already have account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
     
      </>
  )
}

export default Login
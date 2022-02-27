import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"

function Login() {
  return (
    <div className='login'>
    <Link to= '/'>
      <img
       className='login__logo'
       src='https://governmentjobswork.com/wp-content/uploads/2020/10/Amazon-Jobs.png' />
      </Link> 

       <div className='login__container'>
          <h2>Sign-in</h2>
          <form>
              <h5>Email or mobile phone number</h5>
              <input type='text' />
              <h5>Password</h5>
              <input type='password' />
          </form>

          <button className='login__signInButton'>Sign in</button>
          <small>Forgot Password?</small>
          <p>By signing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          <button className='login__registerButton'>Create your amazon account</button>
       </div>
    </div>
  )
}

export default Login
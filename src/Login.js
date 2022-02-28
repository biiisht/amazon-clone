import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { auth } from './firebase'
import "./login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 function HandleEmail(event) {
     const newValue = event.target.value;
     setEmail(newValue);
  }

  function HandlePassword(event) {
    const newPassValue = event.target.value;
    setPassword(newPassValue);
 }

  const login = event => {
    // console.log("yuvyhvi")
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) =>{
      //loggedin
    })
    .catch(e => )
  }

  const register = event =>{
    event.preventDefault();
  }

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
              <input type='text' onChange={HandleEmail} value = {email} />
              <h5>Password</h5>
              <input type='password' onChange={HandlePassword} value = {password}/>
          </form>

          <button className='login__signInButton' onClick={login}>Sign in</button>
          <small>Forgot Password?</small>
          <p>By signing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          <button className='login__registerButton' onClick= {register}>Create your amazon account</button>
       </div>
    </div>
  )
}

export default Login
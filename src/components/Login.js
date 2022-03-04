import React from 'react'
import '../login.css'
import {Link } from 'react-router-dom'
const Login = () => {
  const onClick=()=>{
    const username=document.forms['.formContainer'].input['.username'].value
    const password=document.forms['.formContainer'].input['.password'].value
    if(username === '')
      alert("You can't leave the username blank!")
    if(password === '')
    alert("You must enter a password to login!")
  }
    
  return (
    <div className='loginContainer'>
      <img src='/images/logo.jpg' width="80px" height="80px"></img>
        <form className='formContainer mt-3'>
            <label className='lead'>Enter username/email: </label><br></br>
            <input type='text' name='username' className='username mb-3'></input><br></br>
            <label className='lead'>Enter Password: </label><br></br>
            <input type='text' name='password' className='password mb-4'></input>
            <br></br>
            <Link to='/dashboard' className='loginButton' onClick={onClick}>Login</Link>
        </form>
    </div>
  )
}

export default Login
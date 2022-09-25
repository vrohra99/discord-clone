import React from 'react'
import './Login.css'
import { auth, provider } from './firebase';
import { Button } from '@mui/material';

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className="login__logo">
        <img src="https://i.kym-cdn.com/photos/images/original/001/243/213/52a.png" alt="" />
      </div>

      <Button onClick={signIn}> Sign In</Button>
    </div>
  )
}

export default Login

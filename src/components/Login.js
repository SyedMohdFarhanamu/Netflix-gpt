import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const navigate = useNavigate()

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  // Form Validation.....
  const handleButtonClicked = () => {
    // Validate the form data
    // checkValidate(email,password)
    console.log(email.current.value)
    console.log(password.current.value)
    // console.log(name.current.value)

    const message = checkValidData(email.current.value, password.current.value)
    // console.log(message)
    setErrorMessage(message)

    if(message) return;

    if(!isSignInForm){
      // Sign up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    setErrorMessage(errorCode + "-" + errorMessage)
  });
    }
    else{
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setErrorMessage(errorCode + "-" + errorMessage)
  });
    }
  }

  return (
    <div>
        <Header />

        <div className=' absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_small.jpg" alt="backgroundImg" />
        </div>

        <form onSubmit={(e) => {e.preventDefault()}} className=' w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ?  'Sign In' : 'Sign Up'}</h1>

            {!isSignInForm && <input 
            ref={name}
            type="text" placeholder='Full Name' className='p-4 my-2 w-full bg-gray-700' />}

            <input 
            ref={email} 
            type="text" placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700' />
            <input 
            ref={password} 
            type="password" placeholder='Password' className='p-4 my-2 w-full bg-gray-700' />

            <p className='text-red-500 py-2'>{errorMessage}</p>

            <button className='p-4 my-4 bg-red-700 w-full rounded-lg'
              onClick={handleButtonClicked}>
                {isSignInForm ?  'Sign In' : 'Sign Up'}</button>

            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ?  'New to Netflix ? Sign Up Now' : 'Already Registered ! Sign In Now'}</p>

        </form>
    </div>
  )
}

export default Login


import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt=''
        />
      </div>
      <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input
            className='p-2 my-4 w-full bg-gray-700 rounded-lg'
            type='text' 
            placeholder='Full Name'
          />
        )}
        <input
          className='p-2 my-4 w-full bg-gray-700 rounded-lg'
          type='text' 
          placeholder='Email or phone number'
        />
        <input
          className='p-2 my-4 w-full bg-gray-700 rounded-lg'
          type='password' 
          placeholder='Password'
        />
        <button
          className='p-4 my-6 bg-red-700 w-full rounded-lg'
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
        className='py-4 cursor-pointer'
        onClick={toggleSignInForm}
        >
          {isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login
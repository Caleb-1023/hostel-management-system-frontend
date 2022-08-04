import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [signUp, setSignUp] = useState(false)

  return (
    <div className='container'>
        {/* Write general code around this code block */}
        {signUp ? (
        <>
        {/* Write code specific to signup page here */}
        Hello
        </>
        ):(
        <>
        {/* Write code specific to login page here */}
        World
        </>
        )}
        <button onClick={() => {setSignUp(!signUp)}}>Sign up</button>
        <button onClick={() => navigate('/dashboard')}>Log in</button>
    </div>
  )
}

export default Login
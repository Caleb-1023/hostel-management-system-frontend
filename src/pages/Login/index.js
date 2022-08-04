import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const [signUp, setSignUp] = useState(false)

  return (
    <div className='container'>
        {signUp ? (<>Hello</>):(<>World</>)}
        <button onClick={() => {setSignUp(!signUp)}}>Sign up</button>
        <button onClick={() => navigate('/dashboard')}>Log in</button>
    </div>
  )
}

export default Login
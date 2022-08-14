import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className='d-flex flex-row'>
        <div className="container w-50" style={{height: '100vh'}}>
          <div className="m-5">
          <i className='bx bxs-graduation text-white bx-md mb-5 rounded-4 p-3 bg-dark'></i>
          <h3 className='fw-bold mb-3'>Login</h3>
          <form action="">
            <div className="mb-2">
              <label for="formGroupExampleInput" className="form-label">Username</label>
              <input type="text" className="form-control w-75 bg-light rounded-4 py-2" id="formGroupExampleInput" placeholder=""/>
            </div>
            <div className="mb-2">
              <label for="formGroupExampleInput" className="form-label">Password</label>
              <input type="password" className="form-control w-75 bg-light rounded-4 py-2" id="formGroupExampleInput" placeholder=""/>
            </div>
            <div className="d-flex justify-content-between w-75">
              <div className='form-check'>
                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                <label className="form-check-label" for="gridCheck1">
                  Remember me
                </label>
              </div>
              <p>Forgot Password?</p>
            </div>
            <div>
              <input type="submit" className='btn btn-dark w-75 rounded-4 border-0 my-3 py-2' value="Login"  onClick={() => navigate('/dashboard')} />
            </div>
          </form>
          <div>
            <p>
              Don't have an account? <span style={{cursor: 'pointer', color: '#6A3174'}} onClick={() => navigate('/signup')}>Sign Up</span>
            </p>
          </div>
          </div>
        </div>
        <div className="container w-50 bg-dark" style={{height: '100vh'}}></div>
    </div>
    // <div className='container'>
    //     <button onClick={() => navigate('/signup')}>Sign up</button>
    //     <button onClick={() => navigate('/dashboard')}>Log in</button>
    // </div>
  )
}

export default Login
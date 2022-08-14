import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    fullName: '',
    password: '',
    name: '',
    // accountType: '',
    gender: '',
  })

  const handleSubmit = () => {
    const res = axios.get('https://test-hms.herokuapp.com/api/halls')
    console.log(res)
    
  }

  console.log(user)

  return (
    <div className='d-flex flex-row'>
        <div className="container w-50" style={{height: '100vh'}}>
          <div className="m-5">
          <i className='bx bxs-graduation text-white bx-md mb-3 rounded-4 p-3 bg-dark'></i>
          <h3 className='fw-bold mb-3'>Sign Up</h3>
          <form action="" onSubmit={() => handleSubmit()}>
            <div className="mb-2">
              <label htmlFor="username" className="form-label">Username</label>
              <input 
                type="text" 
                className="form-control w-75 bg-light rounded-4" 
                id="username" 
                placeholder=""
                value={user.username}
                onChange={(e) => setUser({name: e.target.value})}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="fullname" className="form-label">Fullname</label>
              <input 
                type="text" 
                className="form-control w-75 bg-light rounded-4" 
                id="fullname" 
                placeholder=""
                value={user.fullName}
                onChange={(e) => setUser({fullName: e.target.value})}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control w-75 bg-light rounded-4" 
                id="email" 
                placeholder=""
                value={user.email}
                onChange={(e) => setUser({email: e.target.value})}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control w-75 bg-light rounded-4" 
                id="formGroupExampleInput" 
                placeholder=""
                value={user.password}
                onChange={(e) => setUser({password: e.target.value})}
              />
            </div>
            <div className="w-75 my-3 d-flex">
              {/* <div className='w-50 me-1'>
              <label htmlFor="formGroupExampleInput" className="form-label">Account Type</label>
              <select className="form-select bg-light rounded-4" aria-label="Default select example" value={user.accountType}
              onChange={(e) => setUser({accountType: e.target.value})}>
                <option value="student">Student</option>
                <option value="officer">Officer</option>
              </select>
              </div> */}
              <div className='w-50 ms-1'>
              <label htmlFor="formGroupExampleInput" className="form-label">Gender</label>
              <select className="form-select bg-light rounded-4" aria-label="Default select example" value={user.accountType}
              onChange={(e) => setUser({gender: e.target.value})}>
                {/* <option value=""></option> */}
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              </div>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck1"/>
              <label className="form-check-label" htmlFor="gridCheck1">
                I agree to the Terms & Conditions
              </label>
            </div>
            <div>
              <input type="submit" onClick={() => handleSubmit()} className='btn btn-dark w-75 rounded-4 border-0 my-3 py-2' value="Sign Up" />
            </div>
          </form>
          <div>
            <p>
              Already have an account? <span style={{cursor: 'pointer', color: '#6A3174'}} onClick={() => navigate('/')}>Log In</span>
            </p>
          </div>
          </div>
        </div>
        <div className="container w-50 bg-dark" style={{height: '100vh'}}></div>
    </div>
  )
}

export default SignUp
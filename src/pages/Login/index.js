import React, { useState } from 'react'
import useUser from '../../hooks/useUser'
import { useNavigate } from 'react-router-dom'
// import useAuth from '../../hooks/useAuth'
import axios from 'axios'

const Login = () => {
  const { user, setUser } = useUser()
  const navigate = useNavigate()
  const [currUser, setCurrUser] = useState('')
  const [pwd, setPwd] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(user, pwd)
    try {
      const response = await axios.post(
        "https://test-hms.herokuapp.com/api/auth/signin",
        {
          "usernameOrEmail": currUser,
          "password": pwd
        }
      )
      // console.log(response)
      if(response.data){
        const dashboardData = {
          token: response.data.accessToken,
          name: response.data.profile?.name,
          email: response.data.profile?.email,
          matricNo: response.data.profile?.userName,
          gender: response.data.profile?.gender,
        }
        sessionStorage.setItem('user', JSON.stringify(dashboardData))
        setUser(JSON.parse(sessionStorage.getItem('user')))
        navigate('/dashboard')
        // console.log(user)
      }
    } catch (err) {
      console.log("Error")
      // if (!err?.response) {
      //   setErrMsg('No Server Response')
      // } else if (err.response?.status === 409) {
      //   setErrMsg('Username Taken')
      // } else {
      //   setErrMsg('Registration Failed')
      // }
      // errRef.current.focus()
    }
  }

  return (
    <div className='d-flex flex-row'>
      <div className="container w-50" style={{ height: '100vh' }}>
        <div className="m-5">
          <i className='bx bxs-graduation text-white bx-md mb-5 rounded-4 p-3 bg-dark'></i>
          <h3 className='fw-bold mb-3'>Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" value={currUser} onChange={(e) => setCurrUser(e.target.value)} className="form-control w-75 bg-light rounded-4 py-2" id="username" placeholder="" />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" value={pwd} onChange={(e) => { setPwd(e.target.value) }} className="form-control w-75 bg-light rounded-4 py-2" id="password" placeholder="" />
            </div>
            <div className="d-flex justify-content-between w-75">
              <div className='form-check'>
                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Remember me
                </label>
              </div>
              <p>Forgot Password?</p>
            </div>
            <div>
              <input type="submit" className='btn btn-dark w-75 rounded-4 border-0 my-3 py-2' value="Login" 
              // onClick={() => navigate('/dashboard')}
               />
            </div>
          </form>
          <div>
            <p>
              Don't have an account? <span style={{ cursor: 'pointer', color: '#6A3174' }} onClick={() => navigate('/signup')}>Sign Up</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container w-50 bg-dark" style={{ height: '100vh' }}></div>
    </div>
    // <div className='container'>
    //     <button onClick={() => navigate('/signup')}>Sign up</button>
    //     <button onClick={() => navigate('/dashboard')}>Log in</button>
    // { 
    //   "usernameOrEmail": "ibukunod@yahoo.com",
    //   "password": "1801486cu"
    // }
    // </div>
  )
}

export default Login
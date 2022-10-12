import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import api from '../../api/axios'

// Validation
// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
// const PWD_REGEX = /^(?.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
// const REGISTER_URL = 'https://test-hms.herokuapp.com/api/auth/register/student'
// const TEST_URL = 'https://reqres.in//api/register'

const SignUp = () => {
  const navigate = useNavigate()

  // Set focus on user input on-load
  const userRef = useRef()
  // focus on error if error
  const errRef = useRef()

  // input field states
  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(true)
  const [userFocus, setUserFocus] = useState(false)

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(true)
  const [emailFocus, setEmailFocus] = useState(false)

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(true)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [name, setName] = useState('')
  // const [pwdFocus, setPwdFocus] = useState(false)

  const [gender, setGender] = useState('')
  // const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(true)
  const [matchFocus, setMatchFocus] = useState(false)

  // Messages
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  // set focus on-load
  // useEffect(() => {
    // userRef.current.focus()
  // }, [])

  // validate username
  // useEffect(() => {
  //   const result = USER_REGEX.test(user)
  //   console.log(result)
  //   console.log(user)
  //   setValidName(result)
  // }, [user])

  // validate password
  // useEffect(() => {
  //   // const result = PWD_REGEX.test(pwd)
  //   // console.log(result)
  //   console.log(pwd)
  //   // setValidPwd(result)
  //   const match = pwd === matchPwd
  //   setValidMatch(match)
  // }, [pwd, matchPwd])

//  const register = async () => {
//   try{
//     const response = await axios.post("https://reqres.in/api/register",{
//       "email": "eve.holt@reqres.in",
//       "password": "pistol"
//   })
// console.log(response.data.token)
// sessionStorage.setItem("token", response.data.token)}
// catch(err){
// console.log(err)
// }
//  }
//  const register = async () => {
//   try{
//     const response = await axios.post("https://test-hms.herokuapp.com/api/auth/register/student",{"email": "zxcvbnm@gmail.com",
//    "userName": "18CJ021643",
//    "password": "1801670cu",
//    "name": "zxcv zxcvb",
//    "gender": "male"})
// console.log(response)}
// catch(err){
// console.log(err)
// }
//  }

  useEffect( () => {
    setErrMsg('')
    // register()
    },
  //   axios.post("https://test-hms.herokuapp.com/api/auth/register/student", JSON.stringify({ 
  //     // "email": email,
  //     // "userName": user,
  //     // "password": pwd,
  //     // "name": name,
  //     // "gender": gender
  //   "email": "asdfvcxzu@gmail.com",
  //  "userName": "18CJ021699",
  //  "password": "1801670cu",
  //  "name": "Okpaheifufue Caleb",
  //  "gender": "male"
  //  })).then((response) => {
  //   console.log(response)
  //  }).catch((err) => {
  //   console.log(err)
  //   setErrMsg(err.message)
  //  })
  // }
   [
    // user, pwd, matchPwd
  ])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // if button enabled with JS hack
    // const v1 = USER_REGEX.test(user)
    // const v2 = PWD_REGEX.test(pwd)
    // if (!v1 || !v2) {
    //   setErrMsg('Invalid Entry')
    //   return
    // }
    // console.log(user, pwd, email, name, gender)
    // setSuccess(true)
    console.log(email, user, pwd, name, gender)
    try {
      const response = await axios.post(
        "https://test-hms.herokuapp.com/api/auth/register/student", 
        { 
            "email": email, 
            // "email": "okaleb106@gmail.com", 
            "userName": user, 
            // "userName": "18CJ02146", 
            "password": pwd, 
            // "password": "1801670cu", 
            "name": name, 
            // "name": "Okpaheifufue Caleb", 
            "gender": gender 
            // "gender": "male" 
            // "email": "eve.holt@reqres.in",
            // "password": "pistol"
          },
      )
      console.log(response.data)
      console.log(response.accessToken)
      console.log(JSON.stringify(response))
      setSuccess(true)
      setUser('')
      setName('')
      setPwd('')
      setMatchPwd('')
      setEmail('')
      setGender('')
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken')
      } else {
        setErrMsg('Registration Failed')
      }
      errRef.current.focus()
    }
  }

  return (
    <>
    {success ? (
      <section className='container m-auto text-center align-middle my-5 py-5'>
        <h1 className='mb-5 fs-1'>Success!</h1>
        <p>
          <Link style={{textDecoration: 'none'}} className='px-5 py-2 bg-success my-5 text-white rounded fs-5' to='/'>Sign In</Link>
        </p>
      </section>
    ) : (
    <section className='d-flex flex-row'>
        <div className="container w-50" style={{height: '100vh'}}>
          <div className="m-5">
          <i className='bx bxs-graduation text-white bx-md mb-3 rounded-4 p-3 bg-dark'></i>
          <h3 className='fw-bold mb-3'>Sign Up</h3>
          <p ref={errRef} className={errMsg ? 'd-block' : 'd-none'} aria-live='assertive'>{errMsg}</p>
          <form 
            onSubmit={handleSubmit}
          >
            <div className='my-1 d-flex'>
              <div className="mb-2 me-2 w-50">
                <label htmlFor="username" className="form-label">Username</label>
                <input 
                  type="text" 
                  className="form-control bg-light rounded-4" 
                  id="username"
                  ref={userRef}
                  // autoComplete='off'
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  required
                  aria-invalid={validName ? 'false' : 'true'}
                  aria-describedby='uidnote'
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                {/* <p id='uidnote' className={`${userFocus && user && !validName ? 'd-block' : 'd-none'} p-3 bg-dark text-white rounded w-100 my-1`} style={{fontSize: '10px'}}>
                  4 to 24 characters. <br />
                  Must begin with a letter. <br />
                  Letters, numbers, underscores and hyphens are allowed
                </p> */}
              </div>
              <div className="mb-2 w-50">
                <label htmlFor="fullname" className="form-label">Fullname</label>
                <input 
                  type="text" 
                  className="form-control bg-light rounded-4" 
                  id="fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                className="form-control w-75 bg-light rounded-4" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div className='my-1 d-flex'>
              <div className="mb-2 me-2 w-50">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password" 
                  className="form-control bg-light rounded-4" 
                  id="password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  aria-invalid={validPwd ? 'false' : 'true'}
                  aria-describedby='pwdnote'
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)} 
                />
                {/* <p id='pwdnote' className={`${pwdFocus && !validPwd ? 'd-block' : 'd-none'} p-3 bg-dark text-white rounded w-100 my-1`} style={{fontSize: '10px'}}>
                  8 to 24 characters. <br />
                  Must include uppercase and lowercase letters, a number and a special character. <br />
                  Allowed special characters: <span aria-label='exclamation mark'>!</span><span aria-label='at symbol'>@</span>
                  <span aria-label='hashtag'>#</span><span aria-label='dollar sign'>$</span>
                </p> */}
              </div>
              <div className="mb-2 w-50">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input 
                  type="password" 
                  className="form-control bg-light rounded-4" 
                  id="confirmPassword" 
                  value={matchPwd}
                  onChange={(e) => setMatchPwd(e.target.value)}
                  required
                  aria-invalid={validMatch ? 'false' : 'true'}
                  aria-describedby='confirmnote'
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)} 
                />
                {/* <p id='confirmnote' className={`${matchFocus && !validMatch ? 'd-block' : 'd-none'} p-3 bg-dark text-white rounded w-100 my-1`} style={{fontSize: '10px'}}>
                  Must match first password input field
                </p> */}
              </div>
            </div>
            <div className="w-75 my-3">
              <div className='w-50 ms-1'>
                <label htmlFor="formGroupExampleInput" className="form-label">Gender</label>
                <select className="form-select bg-light rounded-4" value={gender} onChange={(e) => setGender(e.target.value)} aria-label="Default select example">
                  <option value=""></option>
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
              <input type="submit" disabled={!validName || !validPwd || !validMatch ? true : false} className='btn btn-dark w-50 rounded-4 border-0 my-3 py-2' value="Sign Up" />
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
    </section>
    )}
    </>
  )
}

export default SignUp
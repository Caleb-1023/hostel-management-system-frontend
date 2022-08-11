import React from 'react';
import FormHeader from '../Login/FormHeader';
import styles from '../../UI/Card/Card.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Ignup() {
    const [signUp, setSignUp] = useState(false)
    return (
        <div className={styles.p} >
            <FormHeader title="Sign Up" />
            <form className='mt-5'>
                <div className='mb-3'>
                    <label htmlFor="uname" className='form-label'>Username</label>
                    <input type="text" name="uname" id="uname" className='form-control rounded-5 w-75 name' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="fname" className='form-label'>Full Name</label>
                    <input type="text" name="fname" id="fname" className='form-control rounded-5 w-75 name' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="ema" name="email" id="email" className='form-control rounded-5 w-75' />
                </div>
                <div className='mb-3'>
                    <label htmlFor="pwd" className='form-label'>Password</label>
                    <input type="password" name="pwd" id="pwd" className='form-control rounded-5 w-75' />
                </div>
                <div className='form-check form-check-inline'>
                    <input type="radio" name="options" id="option1" className='form-check-input option' value='male' />
                    <label htmlFor="radio1" className='form-check-label'>Male</label>
                </div>
                <div className='form-check form-check-inline mb-3'>
                    <input type="radio" name="options" id="option2" className='form-check-input option' value='female' />
                    <label htmlFor="radio2" className='form-check-label'>Female</label>
                </div>
                <div className='form-check'>
                    <input type="checkbox" id="check" className='form-check-input' />
                    <label htmlFor="check" className='form-check-label'>I agree to the <a href="#" className='text-decoration-none link-info'>Terms & Conditions</a></label>
                </div>
                <div div className='d-grid' >
                    <button type="button" onClick={() => { setSignUp(!signUp) }} className='my-4 btn btn-info btn-block w-75 rounded-5'>Sign Up</button>
                </div>
            </form>


            <p>Already have an account?<Link to="/" className='text-decoration-none link-info'>Sign in</Link></p>
        </div >
    )
}

export default Ignup

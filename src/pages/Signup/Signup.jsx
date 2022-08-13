import React from 'react';
import FormHeader from '../Login/FormHeader';
import styles from '../../UI/Card/Card.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Ignup() {
    const [signUp, setSignUp] = useState(true);

    const [details, setDetails] = useState({
        uname: '',
        fname: '',
        email: '',
        pwd: '',
        options: '',
        check: '',
    });
    const handleChange = (e) => {
        const { uname, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [uname]: value };
        });
    };
    const handleSubmit = (e) => {
        let input = details;
        if (input.uname === '' || input.pwd === '' || input.fname === '' || input.email === '' || input.options === '' || input.check === '') {
            alert('Input Field is empty')
        } else {
            setSignUp(signUp)
        }
        e.preventDefault();
    }
    return (
        <div className={styles.p} >
            <FormHeader title="Sign Up" />
            <form action='https://test-hms.herokuapp.com/api/auth/register/student' className='mt-5' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="uname" className='form-label'>Username</label>
                    <input type="text" name="uname" id="uname" className='form-control rounded-5 w-75 name ' onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="fname" className='form-label'>Full Name</label>
                    <input type="text" name="fname" id="fname" className='form-control rounded-5 w-75 name ' onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="email" name="email" id="email" className='form-control rounded-5 w-75 ' onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="pwd" className='form-label'>Password</label>
                    <input type="password" name="pwd" id="pwd" className='form-control rounded-5 w-75 ' onChange={handleChange} />
                </div>
                <div className='form-check form-check-inline'>
                    <input type="radio" name="options" id="option1" className='form-check-input option' value='male' onChange={handleChange} />
                    <label htmlFor="radio1" className='form-check-label'>Male</label>
                </div>
                <div className='form-check form-check-inline mb-3'>
                    <input type="radio" name="options" id="option2" className='form-check-input option' value='female' onChange={handleChange} />
                    <label htmlFor="radio2" className='form-check-label'>Female</label>
                </div>
                <div className='form-check'>
                    <input type="checkbox" name='check' id="check" className='form-check-input' onChange={handleChange} />
                    <label htmlFor="check" className='form-check-label'>I agree to the <a href="#" className='text-decoration-none link-info'>Terms & Conditions</a></label>
                </div>
                <div div className='d-grid' >
                    <button type="button" className='my-4 btn btn-info btn-block w-75 rounded-5'>Sign Up</button>
                </div>
            </form>


            <p>Already have an account?<Link to="/" className='text-decoration-none link-info'>Sign in</Link></p>
        </div >
    )
}

export default Ignup

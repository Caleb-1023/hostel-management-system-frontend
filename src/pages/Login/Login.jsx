import React from 'react'
import FormHeader from './FormHeader'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import styles from '../../UI/Card/Card.module.css'



const SetUp = () => {
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        name: '',
        pwd: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };
    const handleSubmit = (e) => {
        let input = details;
        if (input.name === '' || input.pwd === '') {
            alert('Input Field is empty')
        } else {
            navigate('dashboard')
        }
        e.preventDefault();
    }

    return (
        <div className={styles.form}>
            <div className='container  mt-5 mx-5' >
                <FormHeader title="Login" />
                <form className='mt-5 form' onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="name" className='form-label'>Username*</label>
                        <input type="text" name="name" id="name" className='form-control rounded-5 w-75' onChange={handleChange} />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="pwd" className='form-label'>Password*</label>
                        <input type="password" name="pwd" id="pwd" className='form-control rounded-5 w-75' onChange={handleChange} />
                    </div>
                    <div className='form-check mb-3 d-flex'>
                        <div>
                            <input type="checkbox" id="check" className='form-check-input' />
                            <label htmlFor="check" className='form-check-label'>Remember Me</label>
                        </div>
                        <div>
                            <p className=''><a href="https://accounts.google.com/signin/v2/identifier?hl=en-GB&continue=https%3A%2F%2Fmail.google.com&service=mail&ec=GAlAFw&flowName=GlifWebSignIn&flowEntry=AddSession" className='text-decoration-none link-info' target='_blank' rel='noreferrer'>Forgot Password?</a></p>
                        </div>
                    </div>
                    <div className='d-grid'>
                        <button type="submit" id='btn' className='my-3 btn btn-info btn-block w-75 rounded-5' >Login</button>
                    </div>
                </form>

                <p>Not registered yet? <Link to='/signup' className='text-decoration-none link-info'>Sign Up</Link></p>

            </div >
        </div>
    )
}
// onClick={() => navigate('dashboard')}
// onClick={clickHandler}

export default SetUp

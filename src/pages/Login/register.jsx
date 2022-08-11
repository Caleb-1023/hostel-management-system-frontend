import React from "react";
import { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Register = () => {
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
    const handleSubmit = () => {
        console.log(details);
    }
}

export default Register
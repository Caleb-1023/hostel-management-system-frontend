import React, {useEffect, useState} from 'react';
import useUser from '../../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import './style-dashboard.css';

const StudentDashboard = () => {
  const { user } = useUser()
  const navigate = useNavigate()
  const [currUser, setCurrUser] = useState({})
  const [caleb, setCaleb] = useState('')

  const date = new Date()
  let greeting = () => {
    if (date.getHours() >= 12 && date.getHours() < 17) {
      return 'Good Afternoon'
    } else if (date.getHours() >= 17) {
      return 'Good Evening'
    } else {
      return 'Good Morning'
    }
  }

  useEffect(() => {
    // setUser(JSON.parse(localStorage.getItem('user')))
    // console.log(user)
  }, [caleb])

  
  
  return (
    <div className='container-fluid' style={{paddingLeft: '250px'}}>
      <div className="container">
        <div className="profile mt-3">
          <div className='container py-3 px-5'>
            <div className='d-flex flex-row'>
                <div className="col-4">
                  <h1>{greeting()}<span style={{color:'yellow'}}> ☀</span></h1>
                  <br></br>
                  <p className='h2'>{user?.name}</p>
                  <p>{user?.email}</p>
                  <p>{user?.matricNo}</p>
                </div>
                <div className="col-4">
                  <img src='./images/test.jpg' className='my-2' style={{width:'45%', borderRadius: '6rem'}} alt='user'></img>
                </div>
                <div className="col-4">
                  <p className='mb-5 fw-semibold'>{date.getHours()}:{date.getMinutes()} - {date.toDateString()}</p>
                  <p className='h4'>College of Engineering</p>
                  <p className='h5'>Cyber Security</p>
                  <p className='h6'>500 Level</p>
                </div>
            </div> 
          </div>
        </div>                      
      </div>
        <div className='d-flex flex-row'>
          {/* Current Room */}
          <div className='d-flex flex-column col-4 rounded-5 p-3' style={{margin:'1em', background: '#d9bfdf'}}>
            <h4 className='px-3'>Current Room</h4>
            <div className="col-12 text-center">
              <img className="rounded  mb-2" src="./images/test.JPG" alt="hall" style={{width:'90%', height: '10rem'}}/>
            </div>
            <div className='mx-4 mt-3'>      
              <div className="row">               
                <p className='col'><strong>Hall:</strong> Mandela</p>
                <p className='col'><strong>Wing:</strong> A Wing</p>
              </div>
              <div className="row">               
                <p className='col'><strong>Floor:</strong> 400 Floor</p>
                <p className='col'><strong>Room Number:</strong> 305</p>  
              </div>
            </div>                    
            <div className='text-center'>
              <button className='button p-2' onClick={() => navigate('/dashboard/hall-selection')}>Select Room</button>
            </div>                 
          </div>
          {/* Registered Devices */}
          <div className="d-flex flex-column col-4 rounded-5 p-4" style={{margin:'1em', background: '#d9bfdf'}}>
            <h4 className=''>Registered Devices</h4>
            <div className="d-flex flex-column my-4">
              <ul className='p-0'>
                <li className='d-flex mb-2'>
                  <i className='bx bx-mobile bx-md me-2'></i>
                  <div>
                    <p className='mb-1 fw-semibold'>Army green iphone 12</p>
                    <p className='mb-1'>Initials inscribed</p>
                  </div>
                </li>
                <li className='d-flex mb-2'>
                  <i className='bx bx-tab bx-md me-2'></i>
                  <div>
                    <p className='mb-1 fw-semibold'>Samsung galaxy Tab S8</p>
                    <p className='mb-1'>initals inscribed, Blue Pouch</p>
                  </div> 
                </li>
                <li className='d-flex mb-2'>
                  <i className='bx bx-laptop bx-md me-2' ></i> 
                  <div>
                    <p className='mb-1 fw-semibold'>13 inch Mac Book Pro M1 chip</p>
                    <p className='mb-1'>Red casing</p>
                  </div>
                   
                </li>
              </ul>
            </div>
            <div className='text-center'>
              <button className='button p-2'>Add device</button>
            </div>
          </div>
        </div>
    </div>
  )
}
export default StudentDashboard;
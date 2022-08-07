import React from 'react'


const StudentDashboard= ()=>{
return (
    <div className='container-fluid' style={{paddingLeft: '250px'}}>
        <div className="DashboardContent">
            <div className="Profile">
              <h2>Good Morning ☀</h2>
              <img src="" alt="userimage"/>
              <p>GBENGA, Lagbaja</p> 
              <p>lagbe@stu.edu.com</p>
              <p>22ABCD001</p>
              <p>College of Technology</p>
              <p>Cyber Security</p>
              <p>500 Level</p>
            </div>
            <div className="l-tab">
              <h3>Current Room</h3>
              <span className="image"><img src="" alt="student's room"></img></span>
              <p>Hall:</p>
              <p>Wing:</p> 
              <p>Floor:</p>
              <p>Room number:</p>
            </div>
            <div className="r-tab">
              <h3>Registered Devices</h3>
            </div>
        </div>
    </div>
  )
}
export default StudentDashboard;
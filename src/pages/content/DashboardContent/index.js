import React from 'react'

const DashboardContent = () => {
  return (
    <div className='container-fluid' style={{paddingLeft: '250px'}}>
        <div className="DashboardContent">
            <div className="Greetings">
              <h1>Good Morning</h1>
              <img src="" alt="userimage"/>
              <p>College of Technology</p>
              <p>Cyber Security</p>
              <p>500 Level</p>
            </div>
            <div className="first">
              <span className="image"></span>
              <p>Hall:</p>
              <p>Room number:</p>
            </div>
            <div className="second">
              <h1>Registered Devices</h1>
            </div>
        </div>
    </div>
  )
}

export default DashboardContent
import React from 'react'


const Officer=()=>
{
    return(
      
            <div className='container-fluid' style={{paddingLeft: '250px'}}>
                <div className="DashboardContent">
                    <div className="Profile">
                      <h2>Good Morning ☀</h2>
                      <img src="" alt="userimage"/>
                       <p>Mr Jack, Sparrow</p>
                      <p>davyjones@.edu.com</p>
                      <p>08002345678</p>
                    </div>
                    <div className="l-tab">
                      <h3>Current Room</h3>
                      <span className="image"><img src="" alt="hall image"></img></span>
                      <p>Hall:</p>
                    </div>
                    <div className="r-tab">
                      <h3>Registered Devices</h3>
                    </div>
                </div>
            </div>
    )
}
export default Officer;
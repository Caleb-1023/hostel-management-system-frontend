import React from 'react'
import './style-dashboard';


const Officer=()=>
{
    return(
      
            <div className='container-fluid' style={{paddingLeft: '250px'}}>
                <div className="container DashboardContent">
                    <div className="row align-items-start col Profile" style={{margin:'3em'}}>
                      <h2>Good Morning ☀</h2>
                      <img className="image "src="" alt="userimage" height={'90'} width={'90'}/>
                       <p>Mr Jack, Sparrow</p>
                      <p>davyjones@.edu.com</p>
                      <p>08002345678</p>
                      <p>Male Residency</p>
                      <p>Hall officer</p>
                    </div>
                    <div className="row align-items-end col l-tab" style={{margin:'3em'}}>
                      <h3>Current Post</h3>
                      <span className="image"><img src="" alt="hall"></img></span>
                      <p>Hall:</p>
                    </div>
                    <div className="row align-items-end r-tab" style={{margin:'3em'}}>
                      <h3>Schedule 📅</h3>
                      <div>

                      </div>
                    </div>
                </div>
            </div>
    )
}
export default Officer;
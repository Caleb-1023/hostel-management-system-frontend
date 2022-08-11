import React from 'react';
import './style-dashboard.css';
import Boxicons from 'boxicons';


const StudentDashboard= ()=>{
return (
<div className='container-fluid' style={{paddingLeft: '250px'}}>
  <div className="container DashboardContent">
    <div className="row align-items-start col profile" style={{margin:'1em'}}>
      <div className='container'>
        <img className="rounded float-start p-4"src="" alt="userimage" height={'200'} width={'200'}/><br></br><br></br>
        <h2 className='px-4'>Good Morning <span style={{color:'yellow', width:'100px',height:'100px'}}>☀</span></h2><br></br>
          <h3 className='px-4'>GBENGA, Lagbaja</h3>
            <p className='px-4 sz'><strong>lagbe@stu.edu.com</strong></p>
              <p className='px-4 sz'><strong>22ABCD001</strong></p>
                <div className='end'>
                  <p className='time'>10:00am 1st August 2022</p>
                    <br></br>
                        <h4>College Of Technology</h4>
                  <p className="h4">Cyber Security</p>
                  <p><strong>500 Level</strong></p>
                  </div>      
                  </div>                      
                  </div>
                  <div className='section'>
                    <div className="row align-items-end col l-tab" style={{margin:'1em'}}>
                      <h4 className='col px-4'>Current Room</h4>
                      <span className="img-fluid rounded float-start"><img className="rounded float-start p-4" src="" alt="hall" height={'50px'} width={'50px'}></img></span>
                      <p>Hall: Mandela</p>
                      <p>Floor: 400 Floor</p>
                      <p>Wing:A Wing</p>
                      <p>Room Number:305</p>
                    </div>
                    <div className="row  p-4 align-items-end r-tab" style={{margin:'1em'}}>
                      <h4 className='px-4'>Registered Devices</h4>
                      <p><strong>Army green iphone 12 Pro max initials inscribed</strong></p>
                      <p><strong>Samsung galaxy Tab S8 initals inscribed, Blue Pouch</strong></p>
                      <p><strong>13 inch Mac Book Pro M1 chip Red casing</strong></p>
                    </div>
                  </div>
                </div>
</div>
  )
}
export default StudentDashboard;
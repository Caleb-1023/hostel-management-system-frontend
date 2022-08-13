import React from 'react';
import './style-dashboard.css';
const StudentDashboard= ()=>{
return (
  <div className='container-fluid' style={{paddingLeft: '250px'}}>
    <div className="container DashboardContent">
      <div className="row align-items-start col profile" style={{margin:'1em'}}>
        <div className='container'>
          <div className='row'>
              <div class="col-4">
              <h1>Good Morning <span style={{color:'yellow'}}>☀</span></h1>
              <br></br>
              <p className='h2'>GBENGA, Lagbaja</p>
              <p>Lagbaja@stu.edu.org</p>
              <p>22ABD004</p>
              </div>
              <div className="col-3">
               <img src='' alt='user'></img>
              </div>
              <div className="col end">
              <p>10:00 am 1st August 2022</p>
              <br></br>
              <p className='h4'>College of Engineering</p>
              <p className='h5'>Cyber Security</p>
              <p className='h6'>500 Level</p>
              </div>
          </div> 
        </div>
      </div>                      
    </div>
        <div className='section'>
                    <div className=" row align-items-end col l-tab" style={{margin:'1em'}}>
                      <h4 className='col px-4'>Current Room</h4>
                      <span className="img-fluid rounded float-start"><img className="rounded float-start p-4" src="" alt="hall" style={{height:'5em' ,width:'5em'}}></img></span>
                     <div className='g-2'>                     
                      <p><strong>Hall:</strong>Mandela</p>
                      <p><strong>Wing:</strong>A Wing</p>
                      <p><strong>Floor:</strong>400 Floor</p>
                      <p><strong>RoomNumber:</strong>305</p>  
                      <form>
                      <input style={{margin:'auto 0 auto 13em'}}className='button'type={'submit'} value={'Select Room'}></input>
                     </form>                 
                     </div>                    
                    </div>
                    <div className="row  p-4 align-items-end r-tab" style={{margin:'1em'}}>
                      <h4 className='px-4'>Registered Devices</h4>
                      <p><i className='bx bx-mobile bx-sm'></i><strong>Army green iphone 12 Pro max initials inscribed</strong></p>
                      <p><i className='bx bx-tab bx-sm'></i><strong>Samsung galaxy Tab S8 initals inscribed, Blue Pouch</strong></p>
                      <p><i className='bx bx-laptop bx-sm' ></i><strong>13 inch Mac Book Pro M1 chip Red casing</strong></p>
                      <form>
                      <input style={{margin:'auto 0 auto 13em'}} className='button'type={'submit'} value={'Add device'}></input>
                     </form>
                    </div>
                    
        </div>
  </div>
  )
}
export default StudentDashboard;
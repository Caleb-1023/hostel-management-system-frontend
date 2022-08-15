import React from 'react';
import './style-dashboard.css';


const OfficerDashboard = () => {

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

  return(
    <div className='container-fluid' style={{paddingLeft: '250px'}}>
      <div className="container">
        <div className="mt-4 rounded-5 mb-4" style={{background: '#d9bfdf'}}>
          <div className='container py-3 px-5'>
              <div className='d-flex flex-row align-items-center justify-items-center'>
                <div className="col-4">
                  <img src='./images/test.JPG' style={{width: '50%', borderRadius: '6rem'}} className='mx-5' alt='user'></img>
                </div>
                <div className="col-4">
                  <h2>{greeting()} <span style={{color:'yellow'}}>☀</span></h2>
                  <br></br>
                  <p className='h2'><strong>Mr. Jack,</strong> Sparrow</p>
                  <p>davyjones@z-tu.edu.org</p>
                  <p>08002345678</p>
                </div>
                
                <div className="col-4 text-end">
                  <p className='mb-5 fw-semibold'>{date.getHours()}:{date.getMinutes()} - {date.toDateString()}</p>
                  <p className='h4'>Male Residency</p>
                  <p className='h5'>Hall Officer</p>
                  <p className='h6'>Level 3</p>
              </div>  
            </div>
          </div>                      
        </div>
        
        <div className='d-flex flex-row justify-content-between'>
          <div className="col-3 d-flex flex-column align-items-center justify-content-center mx-3 rounded-5" style={{background: '#d9bfdf'}}>
            <h4 className='fs-3'>Current Post</h4>
            {/* <span className="img-fluid rounded float-start">
              <img className="rounded float-start p-4" src="./images/test.JPG" alt="hall" style={{height:'5em',width:'5em'}}/>
            </span> */}
            <div className=''>                     
              <p><strong>Hall:</strong> Mandela</p>
            </div>                     
          </div>

          {/* Calendar */}
          <div className="row p-4 align-items-end r-tab rounded-5 mx-3">
            <h4 className='px-4'>Schedule<i className='bx bxs-calendar'></i></h4>
            <table className='px-4 container-fluid'>
              <tbody>
                <tr className='push row-sm'>
                  <th className='px-1 row-sm'>Mon</th>
                  <th className='px-1 row-sm'>Tue</th>
                  <th className='px-1 row-sm'>Wed</th>
                  <th className='px-1 row-sm'>Thu</th>
                  <th className='px-1 row-sm'>Fri</th>
                  <th className='px-1 row-sm'>Sat</th>
                  <th className='px-1 row-sm'>Sun</th>
                </tr>
                <tr className='push row-sm'>
                  <td  className='p-1 on-tag'>1</td>
                  <td  className='p-1 on-tag'>2</td>
                  <td  className='p-1 off-tag'>3</td>
                  <td  className='p-1 on-tag'>4</td>
                  <td  className='p-1 on-tag'>5</td>
                  <td  className='p-1 on-tag'>6</td>
                  <td  className='p-1 off-tag'>7</td>
                </tr>
                <tr className='push row-sm'>
                  <td className='p-1 off-tag'>8</td>
                  <td className='p-1 on-tag'>9</td>
                  <td className='p-1 on-tag'>10</td>
                  <td className='p-1 off-tag'>11</td>
                  <td className='p-1 on-tag'>12</td>
                  <td className='p-1 on-tag'>13</td>
                  <td className='p-1 on-tag'>14</td>
                </tr>
                  <tr className='push row-sm'>
                  <td className='p-1 off-tag'>15</td>
                  <td className='p-1 off-tag'>16</td>
                  <td className='p-1 on-tag'>17</td>
                  <td className='p-1 on-tag'>18</td>
                  <td className='p-1 off-tag'>19</td>
                  <td className='p-1 on-tag'>20</td>
                  <td className='p-1 on-tag'>21</td>
                </tr>
                <tr className='push row-sm'>
                  <td className='p-1 on-tag'>22</td>
                  <td className='p-1 off-tag'>23</td>
                  <td className='p-1 off-tag'>24</td>
                  <td className='p-1 on-tag'>25</td>
                  <td className='p-1 on-tag'>26</td>
                  <td className='p-1 off-tag'>27</td>
                  <td className='p-1 off-tag'>28</td>
                </tr>
                <tr className='push row-sm'>
                  <td className='p-1 on-tag'>29</td>
                  <td className='p-1 on-tag'>30</td>
                  <td className='p-1 on-tag'>31</td>
                </tr>
              </tbody>
              <i className='container py-2'>
                <div className='row'>
                  <div className='col'>
                    <i className='i on-tag'>234</i>on duty
                  </div>
                  <div className='col'>
                    <i className='j off-tag'>234</i>off duty
                  </div>
                </div>
              </i>
            </table>
          </div>
        </div>            
      </div> 
    </div>
  )
}
export default OfficerDashboard;
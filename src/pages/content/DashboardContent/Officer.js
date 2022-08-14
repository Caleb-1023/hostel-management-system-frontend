import React from 'react';
import './style-dashboard.css';


const Officer=()=>
{
    return(
<div className='container-fluid' style={{paddingLeft: '250px'}}>
  <div className="container DashboardContent">
    <div className="row align-items-start col profile" style={{margin:'1em'}}>
      <div className='container'>
      <div className='container'>
          <div className='row'>
              <div className="col-3">
               <img src='' alt='user'></img>
              </div>
              <div className="col-4">
              <h2>Good Morning <span style={{color:'yellow'}}>☀</span></h2>
              <br></br>
              <p className='h2'><strong>Mr. Jack,</strong> Sparrow</p>
              <p>davyjones@z-tu.edu.org</p>
              <p>08002345678</p>
              </div>
              
              <div className="col end">
              <p>10:00 am 1st August 2022</p>
              <br></br>
              <p className='h4'>Male Residency</p>
              <p className='h5'>Hall Officer</p>
              <p className='h6'>Level 3</p>
              </div>
          </div> 
        </div>
      </div>                      
    </div>
    
    <div className='section'>
                    <div className=" row align-items-end col l-tab" style={{margin:'1em'}}>
                      <h4 className='col px-4'>Current Post</h4>
                      <span className="img-fluid rounded float-start"><img className="rounded float-start p-4" src="./images/test.JPG" alt="hall" style={{height:'5em' ,width:'5em'}}></img></span>
                     <div className='g-2'>                     
                      <p><strong>Hall:</strong>Mandela</p>
                    </div>                     
                    </div>
                    <div className="row  p-4 align-items-end r-tab" style={{margin:'1em'}}>
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
export default Officer;
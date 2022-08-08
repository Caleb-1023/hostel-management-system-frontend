import React from 'react';
import './style-dashboard.css';


const Officer=()=>
{
    return(
      
            <div className='container-fluid' style={{paddingLeft: '250px'}}>
                <div className="container DashboardContent">
                    <div className="row align-items-start col profile" style={{margin:'3em'}}>
                    <img className="rounded float-start px-4"src="" alt="userimage" height={'200'} width={'200'}/>
                      <h2 className='px-4'>Good Morning ☀</h2>
                       <h3 className='px-4'>Mr Jack, Sparrow</h3>
                      <p className='px-4'>davyjones@.edu.com</p>
                      <p className='px-4'>08002345678</p>
                      <div className='end'>
                      <p>10:00am 1st August 2022</p>
                      <br></br>
                        <h4>Male Residency</h4>
                      <p>Hall officer</p>
                      <p>Level 3</p></div>
                      
                    </div>
                    <div className="row align-items-end col l-tab" style={{margin:'3em'}}>
                      <h3 className='px-4'>Current Post</h3>
                      <span className="img-fluid rounded float-start"><img src="" alt="hall" height={'50px'} width={'50px'}></img></span>
                      <p>Hall:</p>
                    </div>
                    <div className="row align-items-end r-tab" style={{margin:'3em'}}>
                      <h3 className='px-4'>Schedule 📅</h3>
                      <ul>
                        <li className='wkday'>Mon</li>
                        <li className='wkday'>Tue</li>
                        <li className='wkday'>Wed</li>
                        <li className='wkday'>Thu</li>
                        <li className='wkday'>Fri</li>
                        <li className='wkday'>Sat</li>
                        <li className='wkday'>Sun</li>
                      </ul>
                      <table>
                        <th>3</th>
                        <td>1</td>
                      </table>
                    </div>
                </div>
            </div>
    )
}
export default Officer;
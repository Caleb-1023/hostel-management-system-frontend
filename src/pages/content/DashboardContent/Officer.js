import React from 'react';
import './style-dashboard.css';


const Officer=()=>
{
    return(
      
            <div className='container-fluid' style={{paddingLeft: '250px'}}>
                <div className="container DashboardContent">
                    <div className="row align-items-start col profile" style={{margin:'3em'}}>
                    <img className="rounded float-start px-4"src="" alt="userimage" height={'200'} width={'200'}/>
                      <h2 className='px-4'>Good Morning <span style={{color:'yellow', width:'100px',height:'100px'}}>☀</span></h2>
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
                    <div className='px-2'>
                    <div className="row align-items-end col l-tab" style={{margin:'3em'}}>
                      <h3 className='px-4'>Current Post</h3>
                      <span className="img-fluid rounded float-start"><img src="" alt="hall" height={'50px'} width={'50px'}></img></span>
                      <p>Hall:</p>
                    </div>
                    <div className="row align-items-end r-tab" style={{margin:'3em'}}>
                      <h3 className='px-4'>Schedule 📅</h3>
                      <table className='px-4 container'>
                        <tbody>
                        <tr className='push row'>
                          <th className='px-1'>Mon</th>
                          <th className='px-1'>Tue</th>
                          <th className='px-1'>Wed</th>
                          <th className='px-1'>Thu</th>
                          <th className='px-1'>Fri</th>
                          <th className='px-1'>Sat</th>
                          <th className='px-1'>Sun</th>
                        </tr>
                        <tr className='push row'>
                          <td  className='bg-date px-1'>1</td>
                          <td  className='px-1'>2</td>
                          <td  className='px-1'>3</td>
                          <td  className='px-1'>4</td>
                          <td  className='px-1'>5</td>
                          <td  className='px-1'>6</td>
                          <td  className='px-1'>7</td>
                        </tr>
                        <tr className='push row'>
                          <td className='px-1'>8</td>
                          <td className='px-1'>9</td>
                          <td className='px-1'>10</td>
                          <td className='px-1'>11</td>
                          <td className='px-1'>12</td>
                          <td className='px-1'>13</td>
                          <td className='px-1'>14</td>
                        </tr>
                        <tr className='push row'>
                          <td className='px-1'>15</td>
                          <td className='px-1'>16</td>
                          <td className='px-1'>17</td>
                          <td className='px-1'>18</td>
                          <td className='px-1'>19</td>
                          <td className='px-1'>20</td>
                          <td className='px-1'>21</td>
                        </tr>
                        <tr className='push row'>
                          <td className='px-1'>22</td>
                          <td className='px-1'>23</td>
                          <td className='px-1'>24</td>
                          <td className='px-1'>25</td>
                          <td className='px-1'>26</td>
                          <td className='px-1'>27</td>
                          <td className='px-1'>28</td>
                        </tr>
                        <tr className='push row'>
                          <td className='px-1'>29</td>
                          <td className='px-1'>30</td>
                          <td className='px-1'>31</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
            </div>
    )
}
export default Officer;
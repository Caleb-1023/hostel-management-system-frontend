import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
// import Officer from '../content/DashboardContent/Officer'
import StudentDashboard from '../content/DashboardContent/Student';

const Dashboard = () => {
  return (
    <div>
        <Sidebar />
        <Header title='Dashboard'/>
        {/* <Officer/> */}
        <StudentDashboard/>
    </div>
  )
}

export default Dashboard
import React from 'react'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import StudentDashboard from '../content/DashboardContent/Student.js';
import DashboardContent from '../content/DashboardContent';

const Dashboard = () => {
  return (
    <div>
        <Sidebar />
        <Header title='Dashboard'/>
        {/* <Officer/> */}
        <StudentDashboard/>
        <DashboardContent/>

    </div>
  )
}

export default Dashboard
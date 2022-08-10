import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import DashboardContent from '../content/DashboardContent'

const Dashboard = () => {
  return (
    <div>
        <Sidebar />
        <Header title='Dashboard'/>
        <DashboardContent/>
    </div>
  )
}

export default Dashboard
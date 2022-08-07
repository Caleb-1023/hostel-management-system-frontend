import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Officer from '../content/DashboardContent/Officer'

const Dashboard = () => {
  return (
    <div>
        <Sidebar />
        <Header title='Dashboard'/>
        {/* <DashboardContent /> */}
        <Officer/>
    </div>
  )
}

export default Dashboard
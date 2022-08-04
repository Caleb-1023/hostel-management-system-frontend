import React from 'react'
import Header from '../../components/Header'
import DashboardContent from '../content/DashboardContent'

const Dashboard = () => {
  return (
    <div>
        <Header title='Dashboard'/>
        <DashboardContent />
    </div>
  )
}

export default Dashboard
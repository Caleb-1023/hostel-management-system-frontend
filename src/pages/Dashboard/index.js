import React from 'react'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
// import Officer from '../content/DashboardContent/Officer';
//import StudentDashboard from '../content/DashboardContent/Student.js';
import DashboardContent from '../content/DashboardContent';
import { Routes, Route } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
        <Sidebar />
        <Header title='Dashboard'/>
        <DashboardContent />

    </div>
  )
}

export default Dashboard
import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import ReportContent from '../content/ReportContent'

const Report = () => {
  return (
    <div>
        <Sidebar />
        <Header title='Report'/>
        <ReportContent />
    </div>
  )
}

export default Report
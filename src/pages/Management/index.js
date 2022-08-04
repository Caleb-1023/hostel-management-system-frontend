import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import ManagementContent from '../content/ManagementContent'

const Management = () => {
  return (
    <div>
        <Sidebar />
        <Header title='Management'/>
        <ManagementContent />
    </div>
  )
}

export default Management
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from "./Header";


const Layout = () => {
  return (
    <>
      <Sidebar />
      <Header title='LEXMAN' />

        <Outlet />
    </>
  )
}

export default Layout
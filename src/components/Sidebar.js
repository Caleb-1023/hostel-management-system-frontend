import React from 'react'
import useUser from '../hooks/useUser'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const { setUser } = useUser()

    const handleLogout = () => {
        sessionStorage.removeItem('user')
        setUser({})
    }
  return (
    <div className='position-fixed p-4 bg-dark' style={{minHeight: '100vh', zIndex: '20'}}>
        <i className='text-white fs-1 mx-3 mb-4 bx bxs-graduation' ></i>
        <ul className='ps-2 mt-4'>
            <li className='mb-4'>
                <Link className='text-white fs-5' style={{textDecoration: 'none'}} to='/dashboard'><i className='mx-2 fs-3 bx bxs-dashboard'></i> Dashboard</Link>
            </li>
            <li className='mb-4'>
                <Link className='text-white fs-5' style={{textDecoration: 'none'}} to='/management'><i className='mx-2 fs-3 bx bxs-home-alt-2'></i> Management</Link>
            </li>
            <li className='mb-4'>
                <Link className='text-white fs-5' style={{textDecoration: 'none'}} to='/report'><i className='mx-2 fs-3 bx bxs-report'></i> Report</Link>
            </li>
        </ul>
        <ul className='position-fixed bottom-0 ps-2'>
            <li className='mb-4'>
                <Link className='text-white fs-5' style={{textDecoration: 'none'}} onClick={handleLogout} to='/'><i className='mx-2 fs-3 bx bx-log-out'></i> Sign Out</Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
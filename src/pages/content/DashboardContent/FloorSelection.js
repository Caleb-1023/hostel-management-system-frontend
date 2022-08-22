import React from 'react'
import { useNavigate } from 'react-router-dom'

const FloorSelection = () => {
    const navigate = useNavigate()
    const halls = [
        {
            name: '100 Floor'
        },
        {
            name: '200 Floor'
        },
        {
            name: '300 Floor'
        },
        {
            name: '400 Floor'
        }
    ]

  return (
    <div className='container-fluid' style={{paddingLeft: '250px'}}>
        <div className="d-flex flex-column card m-3 p-4">
            {halls?.map(hall => {
                return <div className='card col-6 text-center m-3 p-3 bg-dark text-white'  onClick={() => navigate('/dashboard/room-selection')} style={{cursor: 'pointer'}}>{hall.name}</div>
            })}
        </div>
    </div>
  )
}

export default FloorSelection
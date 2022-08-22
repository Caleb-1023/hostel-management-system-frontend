import React from 'react'
import { useNavigate } from 'react-router-dom'

const HallSelection = () => {
    const navigate = useNavigate()
    const halls = [
        {
            name: 'Joseph'
        },
        {
            name: 'Daniel'
        },
        {
            name: 'John'
        },
        {
            name: 'Peter'
        }
    ]

  return (
    <div className='container-fluid' style={{paddingLeft: '250px'}}>
        <div className="d-flex flex-row flex-wrap card m-3 p-4">
            {halls?.map(hall => {
                return <div className='card col-4 m-3 p-3 bg-dark text-white' onClick={() => navigate('/dashboard/wing-selection')} style={{cursor: 'pointer'}}>{hall.name}</div>
            })}
        </div>
    </div>
  )
}

export default HallSelection
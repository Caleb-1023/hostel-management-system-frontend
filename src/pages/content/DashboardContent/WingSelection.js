import React from 'react'
import { useNavigate } from 'react-router-dom'

const WingSelection = () => {
    const navigate = useNavigate()
    const halls = [
        {
            name: 'A Wing'
        },
        {
            name: 'B Wing'
        },
        {
            name: 'C Wing'
        },
        {
            name: 'D Wing'
        },
        {
            name: 'E Wing'
        },
        {
            name: 'F Wing'
        },
        {
            name: 'G Wing'
        },
    ]

  return (
    <div className='container-fluid' style={{paddingLeft: '250px'}}>
        <div className="d-flex flex-row flex-wrap card m-3 p-4">
            {halls?.map(hall => {
                return <div className='card col-3 text-center m-3 p-3 bg-dark text-white' onClick={() => navigate('/dashboard/floor-selection')} style={{cursor: 'pointer'}}>{hall.name}</div>
            })}
        </div>
    </div>
  )
}

export default WingSelection
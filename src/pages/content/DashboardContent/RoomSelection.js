import React from 'react'

const FloorSelection = () => {
    const halls = [
        {
            name: '1',
            available: true
        },
        {
            name: '1',
            available: true
        },
        {
            name: '1',
            available: true
        },
        {
            name: '2',
            available: false
        },
        {
            name: '1',
            available: true
        },
        {
            name: '2',
            available: false
        },
        {
            name: '2',
            available: false
        },
        {
            name: '2',
            available: false
        },
        {
            name: '1',
            available: true
        },
        {
            name: '2',
            available: false
        },
    ]

  return (
    <div className='container-fluid' style={{paddingLeft: '250px'}}>
        <div className="d-flex flex-row flex-wrap card m-3 p-4">
            {halls?.map(hall => {
                return <div className={`card col-2 text-center m-3 p-3 ${hall.available ? ('bg-dark text-white'):('bg-light text-dark')}`} style={{cursor: 'pointer'}}>{hall.name}</div>
            })}
        </div>
    </div>
  )
}

export default FloorSelection
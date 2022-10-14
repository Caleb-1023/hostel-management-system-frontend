import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const WingSelection = () => {
    const navigate = useNavigate()
    const bearer = JSON.parse(sessionStorage.getItem('user'))
    const wings = [
        {
            id: 1,
            name: 'A Wing'
        },
        {
            id: 2,
            name: 'B Wing'
        },
        {
            id: 3,
            name: 'C Wing'
        },
        {
            id: 4,
            name: 'D Wing'
        },
        {
            id: 5,
            name: 'E Wing'
        },
        {
            id: 6,
            name: 'F Wing'
        },
        {
            id: 7, 
            name: 'G Wing'
        },
    ]

    const getWings = async () => {
        try{
            const response = await axios.get("https://test-hms.herokuapp.com/api/halls/3/wings",{
                headers: {
                    Authorization: `Bearer ${bearer.token}`
                }
            })
            console.log(response)
        } catch(err) {
            console.log('Error')
        }
    }

    useEffect(() => {
        getWings()
    }, [])

  return (
    <div className='container-fluid' style={{paddingLeft: '250px'}}>
        <div className="d-flex flex-row flex-wrap card m-3 p-4">
            {wings?.map(wing => {
                return <div className='card col-3 text-center m-3 p-3 bg-dark text-white' key={wing.id} onClick={() => navigate('/dashboard/floor-selection')} style={{cursor: 'pointer'}}>{wing.name}</div>
            })}
        </div>
    </div>
  )
}

export default WingSelection
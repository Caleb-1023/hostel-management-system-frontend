import React, { useEffect } from 'react'
// import useUser from '../../../hooks/useUser'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const HallSelection = () => {
    const navigate = useNavigate()
    // const {user, setUser} = useUser()
    const bearer = JSON.parse(sessionStorage.getItem('user'))
    
    console.log(bearer.token)
    const getHalls = async () => {
        try {
            const response = await axios.get(`https://test-hms.herokuapp.com/api/halls/${bearer.gender}/viewByGender`,
            {
                headers: {
                    Authorization: "Bearer " + bearer.token
                }
            })
            console.log(response)
            setHalls(response.data.data)
            setIsLoading(false)
        } catch (err) {
            console.log('Error')
        }
    }
    
    const [halls, setHalls] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // setUser(JSON.parse(sessionStorage.getItem('user')))
        // console.log(user)
        getHalls()
    }, [])

    if (halls.length === 0 && isLoading) {
        return <p>Loading...</p>
    }

  return (
    <div className='container-fluid' style={{paddingLeft: '250px'}}>
        <div className="d-flex flex-row flex-wrap card m-3 p-4">
            {halls?.map(hall => {
                return <div className='card col-4 m-3 p-3 bg-dark text-white' key={hall.hallId} onClick={() => navigate('/dashboard/wing-selection')} style={{cursor: 'pointer'}}>{hall.hallName}</div>
            })}
        </div>
    </div>
  )
}

export default HallSelection
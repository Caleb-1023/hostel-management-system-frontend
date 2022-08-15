import React from 'react'
import { useNavigate } from 'react-router-dom'

const ManagementContent = () => {
  const notifications = [
    'You have 4 unread reports', 'You have 2 new requests', 'Weekly attendance report due tomorrow', 'Six new items added to inventory'
  ]

  const navigate = useNavigate()

  return (
    <div className='container-fluid' style={{paddingLeft: '250px'}}>
      <div className='row row-cols-auto p-3'>
        <div className="card col-5 m-4 p-5 rounded-5">
          <h4 className="fw-bold">Notifications <i class='bx bxs-bell-ring ms-1 bx-tada'></i></h4>
          <ul>
            {notifications?.map((notification) => {
              return <li className='my-1' >{notification}</li>
            })}
          </ul>
        </div>
        <div className="card col-5 m-4 p-5 rounded-5">
          <h4 className="fw-bold">Registered Students</h4>
          <ul>
            <li className='my-3 fw-semibold fs-5' style={{listStyle: 'none'}}>Hall Capacity: 400</li>
            <li className='my-3 fw-semibold fs-5' style={{listStyle: 'none'}}>Number of Registered Students: 390</li>
            <li className='my-3 fw-semibold fs-5' style={{listStyle: 'none'}}>Students on Campus: 300</li>
          </ul>
          <div className='my-3'>
            <button 
            className='btn btn-primary rounded-5 mx-auto px-4' 
            // onClick={() => navigate('/management/student-database')}
            >
              View Student Database
            </button>
          </div>
        </div>
        <div className="card col-5 m-4 p-5 rounded-5">
          <h4 className="fw-bold">Inventory Log</h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo officia enim neque, praesentium ipsum pariatur facilis consectetur at earum perspiciatis, mollitia aspernatur magnam tempora veritatis labore sequi porro error molestiae, a voluptates! Quae tempore, quod consequatur quaerat nemo consequuntur, dolore vel, facilis eius distinctio voluptate voluptatem natus! Iure nihil fugiat earum, necessitatibus odio impedit atque, pariatur quibusdam quos debitis porro molestiae, expedita recusandae. Consectetur corporis quibusdam assumenda, voluptatibus omnis ipsam alias dolor dolorem perferendis enim error aliquam sit veritatis sed necessitatibus totam expedita libero ducimus quo eius labore tempore aliquid iusto. Vel ipsam numquam quia est voluptatem nisi excepturi similique.
        </div>
      </div>
    </div>
  )
}

export default ManagementContent
import React from 'react'

const Status = ({status, text}) => {

	return (
		<>
			{status === "pending" ? (
				<div class="d-flex align-items-center"><i class='bx bxs-circle text-warning me-1' style={{fontSize: '10px'}}></i> {text}</div>

			) : status === "success" ? (
				<div class="d-flex align-items-center"><i class='bx bxs-circle text-success me-1' style={{fontSize: '10px'}}></i> {text}</div>

			) : status === "failed" ? (
				<div class="d-flex align-items-center"><i class='bx bxs-circle text-danger me-1' style={{fontSize: '10px'}}></i> {text}</div>

			) : (
				<></>
			)}


		</>
	)
}

export default Status
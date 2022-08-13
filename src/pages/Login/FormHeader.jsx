import React from 'react';


function FormHeader({ title }) {
    return (
        <>
            <div>
                <i className='bx bxs-graduation bx-lg bg-info rounded-3 mb-5'></i>
            </div>
            <h1>{title}</h1>
        </>
    )
}

export default FormHeader

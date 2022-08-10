import React from 'react'
import ReportTable from './ReportTable'

const ReportContent = () => {
  return (
    <div className='container-fluid py-5' style={{paddingLeft: '250px', height: '90vh'}}>
        <div className="card bg-light p-3 mt-3 mb-5 h-100 mx-4">
            <h4 className='text-center fs-3 fw-bold'>Maintenance Form</h4>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary btn-sm col-1 rounded-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
              New Report
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-light">
                  <div class="modal-header text-center">
                    <h5 class="modal-title text-center w-100 fw-bold" id="exampleModalLabel">New Report</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form action="">
                    <div class="mb-3">
                      {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Title"/>
                    </div>
                    <div class="mb-3">
                      {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
                      <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Details' rows="6"></textarea>
                    </div>
                    <div class="mb-3">
                      <button type="submit" class="btn btn-primary rounded-5 px-5 py-2 fw-semibold">Submit</button>
                    </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button> */}
                  </div>
                </div>
              </div>
            </div>
            <ReportTable />
        </div>
    </div>
  )
}

export default ReportContent
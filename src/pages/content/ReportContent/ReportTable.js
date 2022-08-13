import React from 'react'
import Status from '../../../components/Status'

const ReportTable = () => {
  const reports = [
    {
      title: "Bad fan",
      roomNo: "A302",
      dateSubmitted: new Date().toDateString(),
      status: "Active",
      dateResolved: new Date().toDateString()
    },
    {
      title: "Broken wardrobe",
      roomNo: "A302",
      dateSubmitted: new Date().toDateString(),
      status: "Active",
      dateResolved: new Date().toDateString()
    },
    {
      title: "Bad socket",
      roomNo: "A302",
      dateSubmitted: new Date().toDateString(),
      status: "Active",
      dateResolved: new Date().toDateString()
    },
    {
      title: "Bad socket",
      roomNo: "A302",
      dateSubmitted: new Date().toDateString(),
      status: "Active",
      dateResolved: new Date().toDateString()
    },
    {
      title: "Bad socket",
      roomNo: "A302",
      dateSubmitted: new Date().toDateString(),
      status: "Active",
      dateResolved: new Date().toDateString()
    },
    {
      title: "Bad socket",
      roomNo: "A302",
      dateSubmitted: new Date().toDateString(),
      status: "Active",
      dateResolved: new Date().toDateString()
    },
    {
      title: "Bad socket",
      roomNo: "A302",
      dateSubmitted: new Date().toDateString(),
      status: "Active",
      dateResolved: new Date().toDateString()
    },
    {
      title: "Bad socket",
      roomNo: "A302",
      dateSubmitted: new Date().toDateString(),
      status: "Active",
      dateResolved: new Date().toDateString()
    },
    {
      title: "Bad socket",
      roomNo: "A302",
      dateSubmitted: new Date().toDateString(),
      status: "Active",
      dateResolved: new Date().toDateString()
    },
    {
      title: "Bad socket",
      roomNo: "A302",
      dateSubmitted: new Date().toDateString(),
      status: "Active",
      dateResolved: new Date().toDateString()
    },
  ]

  return (
    <div className='container overflow-scroll'>
        <table className="table my-3">
          <thead>
            <tr>
              <th className='fs-5' scope="col"></th>
              <th className='fs-5' scope="col">Title</th>
              <th className='fs-5' scope="col">Room No</th>
              <th className='fs-5' scope="col">Date Submitted</th>
              <th className='fs-5' scope="col">Status</th>
              <th className='fs-5' scope="col">Date Resolved</th>
            </tr>
          </thead>
          <tbody>
            {reports?.map((report) => {
              return  <tr>
                  <td>{reports.indexOf(report) + 1}</td>
                  <td>{report.title}</td>
                  <td>{report.roomNo}</td>
                  <td>{report.dateSubmitted}</td>
                  <td><Status status='success' text='Done' /></td>
                  <td>{report.dateResolved}</td>
                </tr>
            })}
          </tbody>
        </table>
    </div>
  )
}

export default ReportTable
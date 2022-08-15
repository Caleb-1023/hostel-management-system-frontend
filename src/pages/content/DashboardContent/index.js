import React from "react";
import StudentDashboard from "./StudentDashboard";
import OfficerDashboard from "./OfficerDashboard";
import { Routes, Route } from 'react-router-dom';

const DashboardContent= ()=>{
    return(
    <>
    {/* <OfficerDashboard /> */}
    <Routes>
        <Route path="/" element={<StudentDashboard/>} />
        <Route path="/room-selection" element={<OfficerDashboard/>} />
    </Routes>
    
    </>);
}
export default DashboardContent;
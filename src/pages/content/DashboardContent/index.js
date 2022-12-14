import React from "react";
import StudentDashboard from "./StudentDashboard";
import OfficerDashboard from "./OfficerDashboard";
import { Routes, Route } from 'react-router-dom';
import HallSelection from "./HallSelection";
import FloorSelection from "./FloorSelection";
import WingSelection from "./WingSelection";
import RoomSelection from "./RoomSelection"

export const routersConfig = {
    wingSelection: (hallId) => `/dashboard/wing-selection/${hallId}`
}

const DashboardContent= ()=>{
    return(
    <>
    {/* <OfficerDashboard /> */}
    <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/hall-selection" element={<HallSelection />} />
        {/* <Route path={routersConfig.wingSelection(":hallId")} element={<WingSelection />} /> */}
        <Route path="/wing-selection" element={<WingSelection />} />
        <Route path="/floor-selection" element={<FloorSelection />} />
        <Route path="/room-selection" element={<RoomSelection />} />
    </Routes>
    
    </>);
}
export default DashboardContent;
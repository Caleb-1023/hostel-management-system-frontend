import {Routes, Route } from "react-router-dom";
import React from "react";
// import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard"
import Management from "./pages/Management"
import Report from "./pages/Report"
import Login from "./pages/Login";
import StudentDatabase from "./pages/content/ManagementContent/StudentDatabase";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
    {/* <Sidebar /> */}
    <Routes>
      <Route index path='/' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/dashboard/*' element={<Dashboard />} />
      <Route path='/management' element={<Management />}>
        {/* <Route path="/management/student-database" element={<StudentDatabase />} /> */}
      </Route>
      <Route path='/report' element={<Report />} />
    </Routes>
   </>
  );
}

export default App;

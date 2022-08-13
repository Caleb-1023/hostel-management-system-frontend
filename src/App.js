import { Routes, Route } from "react-router-dom";
import React from "react";
// import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard"
import Management from "./pages/Management"
import Report from "./pages/Report"
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <>

      {/* <Sidebar /> */}
      <Routes>
        <Route index path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/management' element={<Management />} />
        <Route path='/report' element={<Report />} />
      </Routes>
    </>
  );
}

export default App;

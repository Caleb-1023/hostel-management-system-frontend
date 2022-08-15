import { Routes, Route } from "react-router-dom";
import React from "react";
// import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard"
import Management from "./pages/Management"
import Report from "./pages/Report"
import Login from "./pages/Login";
<<<<<<< HEAD
import Signup from "./pages/Signup";

=======
import StudentDatabase from "./pages/content/ManagementContent/StudentDatabase";
import SignUp from "./pages/SignUp";
>>>>>>> 845ad118f185abef448c3cf5b149b7e2c0321381

function App() {
  return (
    <>
<<<<<<< HEAD

      {/* <Sidebar /> */}
      <Routes>
        <Route index path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/management' element={<Management />} />
        <Route path='/report' element={<Report />} />
      </Routes>
    </>
=======
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
>>>>>>> 845ad118f185abef448c3cf5b149b7e2c0321381
  );
}

export default App;

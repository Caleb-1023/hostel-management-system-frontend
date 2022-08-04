import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard"
import Management from "./pages/Management"
import Report from "./pages/Report"

function App() {
  return (
    <>
    <Sidebar />
    <Routes>
      <Route index path='/dashboard' element={<Dashboard />} />
      <Route path='/management' element={<Management />} />
      <Route path='/report' element={<Report />} />
    </Routes>
    </>
  );
}

export default App;

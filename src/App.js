import React from "react";
import "./App.css";
import Navbar from "./components/navBar/Navbar";
import Leftbar from "./components/leftBar/Leftbar";
import Topbar from "./components/topBar/Topbar";
import residentHall from "./components/ResidentHall/residentHall";

function App() {
  return (
    <div className="app">
      <div className="app-body">
        <Navbar />
        <div className="app-container">
          <Topbar />
          <Leftbar />
        </div>
      </div>
    </div>
  );
}

export default App;

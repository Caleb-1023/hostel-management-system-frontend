import React from "react";
import "./residentHall.css";

function residentHall() {
  return (
    <div className="resident">
      <div className="resident-body">
        <div className="resident-container">
          <div className="title">Resident Halls</div>
          <div className="image-controller">
            <div className="resident-img">
              <img
                className="resident-image"
                src="./images/Rectangle 43.svg"
                alt=""
              />
              <img
                className="resident-image"
                src="./images/Rectangle 43.svg"
                alt=""
              />
            </div>
            <div className="resident-img">
              <img
                className="resident-image"
                src="./images/Rectangle 43.svg"
                alt=""
              />
              <img
                className="resident-image"
                src="./images/Rectangle 43.svg"
                alt=""
              />
            </div>
          </div>
          <button className="btn">Back</button>
        </div>
      </div>
    </div>
  );
}

export default residentHall;

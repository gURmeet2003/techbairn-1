import React from "react";
import "./Enroll.css";
import eventBoy from "../../../assets/Group 425.png";

const Enroll: React.FC = () => {
  return (
    <div className="enroll">
      <div className="enroll-content">
        <div className="enroll-text">
          <p className="enroll-text-large visbyroundCF extrabold">
            Become a Mentor
          </p>
          {/* <p className="visbyroundCF extrabold"></p> */}
          <p className="enroll-text-small visbyroundCF medium">
            Are you passionate about making a difference in society and
            expanding your own knowledge? TechBairn offers an exciting
            opportunity right at your fingertips!
          </p>
          <button className="enroll-button visbyroundCF bold">
            <p>Apply Now</p>
          </button>
        </div>
        <div className="enroll-img">
          <p className="image-para">Become a Mentor</p>
          <img src={eventBoy} alt="Girl"></img>
        </div>
        {/* <button className="enroll-help">Help</button> */}
      </div>
    </div>
  );
};

export default Enroll;

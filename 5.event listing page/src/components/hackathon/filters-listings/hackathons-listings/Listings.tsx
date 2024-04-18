import React from "react";
import "./Listings.css";

interface Props {
  rectColor: string;
  hColor: string;
  heading: string;
  para: string;
  date: string;
}

const Listings: React.FC<Props> = (props: Props) => {
  return (
    <div className="listings-container">
      <div
        className="listings-rectangle"
        style={{ backgroundColor: props.rectColor }}
      >
        <p style={{ color: props.hColor }}>H</p>
      </div>
      <div className="listings-name">
        <p className="visbyroundCF bold listings-name-para1">{props.heading}</p>
        <p className="visbyroundCF medium listings-name-para2">{props.para}</p>
      </div>
      <div className="listings-date">
        <p className="visbyroundCF bold">{props.date}</p>
      </div>
      <div className="listings-button">
        <button className="visbyroundCF demibold listings-button-enroll">
          <p>Enroll</p>
        </button>
        <button className="visbyroundCF demibold listings-button-details">
          <p>Details</p>
        </button>
      </div>
    </div>
  );
};

export default Listings;

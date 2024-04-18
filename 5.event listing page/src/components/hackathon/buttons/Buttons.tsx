import React from "react";
import "./Buttons.css";
import { useState } from 'react';


const Buttons: React.FC = () => {
  const [value, setValue] = useState<number>(50);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const upcomingBackgroundColor = isToggled ? 'white' : '#6D87F5';
  const pastBackgroundColor = isToggled ? '#6D87F5' : 'white';
  const upcomingTextColor = isToggled ? '#6D87F5' : 'white';
  const pastTextColor = isToggled ? 'white' : '#6D87F5';

  const makeTrue = () => {
    setIsToggled(false);
  };
  const makeFalse = () => {
    setIsToggled(true);
  };
  return (
    <div className="events-buttons-container">
    <div className="events-buttons">
      <button style={{backgroundColor:upcomingBackgroundColor,color:upcomingTextColor}} onClick={makeTrue} className="events-button-upcoming"><p className="visbyroundCF bold">Upcoming <br />Events</p></button>
      
      <button style={{backgroundColor:pastBackgroundColor,color:pastTextColor}} onClick={makeFalse} className="events-button-past"><p className="visbyroundCF bold">Past <br /> Events</p></button>
    </div>
  </div>
  );
};

export default Buttons;

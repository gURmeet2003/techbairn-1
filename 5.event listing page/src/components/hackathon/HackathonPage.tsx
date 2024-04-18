import React from "react";
import "./HackathonPage.css";
import Biggest from "./biggest/Biggest";
import Buttons from "./buttons/Buttons";
import FiltersListings from "./filters-listings/Filters-Listings";

const HackathonPage: React.FC = () => {
  return (
    <div className="hackathon-page">
      <Biggest />
      <Buttons />
      <FiltersListings />
    </div>
  );
};

export default HackathonPage;

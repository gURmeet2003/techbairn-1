import React from "react";
import "./Programs.css";
import Details from "./details/Details";
import Overview from "./overview/Overview";
import Projects from "./projects/Projects";
import Roadmap from "./roadmap/Roadmap";
import Certificate from "./certificate/Certificate";
import Concepts from "./concepts/Concepts";
import Instructor from "./instructor/Instructor";
import StudentSaying from "./studentssaying/StudentSaying";
import Faq from "./faq/Faq";
import Help from "./help/Help";
import Header from "../header/Header";

const Programs: React.FC = () => {
  return (
    <div className="programs">
      <Header />
      <Details star={4} rating={5000} students={10000} />
      <Roadmap />
      <Overview />
      <Projects />
      <Concepts />
      <Certificate />
      <Instructor />
      <StudentSaying />
      <Faq />
      <Help />
    </div>
  );
};
export default Programs;

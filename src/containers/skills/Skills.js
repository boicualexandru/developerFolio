import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";

export default function Skills() {
  return (
    <div className="container-fluid px-lg-6 mt-5" id="skills">
      <div className="row">
        <div className="col-lg-6 order-2 mb-4 pl-lg-4">
          <h2 className="skills-heading">{skillsSection.title} </h2>
          <p className="subTitle skills-text-subtitle">{skillsSection.subTitle}</p>
          <SoftwareSkill skills={skillsSection.softwareSkills} />
          <div>
            {skillsSection.skills.map(skills => {
              return <p className="subTitle skills-text">{skills}</p>;
            })}
          </div>
        </div>
        <div className="col-lg-6 order-3 order-lg-1 mb-4 text-center">
          <img className="w-75" alt="Alex" src={require("../../assests/images/profileBlob.jpg")}></img>
        </div>
      </div>
    </div>
  );
}

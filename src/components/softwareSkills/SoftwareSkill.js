import React from "react";
import "./SoftwareSkill.css";

export default function SoftwareSkill({ skills }) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skills.map(skill => {
            if(skill.type == "text")
              return (
                <li className="software-skill-inline text-skill" name={skill.skillName} title={skill.skillName}>
                  <span>{skill.displayName}</span>
                </li>
              )

            return (
              <li className="software-skill-inline" name={skill.skillName} title={skill.skillName}>
                <i className={skill.fontAwesomeClassname}></i>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection, CustomSkillsSection} from "../../portfolio";

function CustomPhysicsSkill() {
    // Variable that will store skill icons/names to be demonstrated for this domain
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {CustomSkillsSection.physicsSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function CustomDSSkill() {
    // Variable that will store skill icons/names to be demonstrated for this domain
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {CustomSkillsSection.DSSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function CustomSWESkill() {
    // Variable that will store skill icons/names to be demonstrated for this domain
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {CustomSkillsSection.SWESkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export {
    CustomPhysicsSkill,
    CustomDSSkill,
    CustomSWESkill
}

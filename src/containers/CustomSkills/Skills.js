import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {CustomPhysicsSkill, CustomDSSkill, CustomSWESkill} from "../../components/CustomsoftwareSkills/SoftwareSkill"
import {illustration, skillsSection, CustomSkillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function CustomSkills() {
  const {isDark} = useContext(StyleContext);
  if (!CustomSkillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {CustomSkillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {CustomSkillsSection.subTitle}
            </p>
            <div>
              <p
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {CustomSkillsSection.skills[0]}
                  </p>
            </div>
              <CustomPhysicsSkill />
              <div>
              <p
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {CustomSkillsSection.skills[1]}
                  </p>
            </div>
              <CustomDSSkill />
              <div>
              <p
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {CustomSkillsSection.skills[2]}
                  </p>
            </div>
              <CustomSWESkill />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Observable universe"
                src={require("../../assets/images/Obs_Universe_logarithmic.png")}
              ></img>
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
}

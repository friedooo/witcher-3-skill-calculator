import React from "react";
import SkillBar from "./SkillBar";
import AvailableSkills from "./AvailableSkills";

function SkillsBlock() {
  return (
    <div className="skills-block">
      <SkillBar />
      <AvailableSkills />
    </div>
  );
}

export default SkillsBlock;

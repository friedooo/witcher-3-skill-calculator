import React from "react";
import SkillHoc from "../../hoc/SkillHoc";

const SkillLabels = ({ skillArr, switchBranch }) => {
  return (
    <>
      {skillArr.map(({ skillName, skillComponent }, i) => {
        return (
          <div className="skill" key={i}>
            <SkillHoc onClick={() => switchBranch(skillName)}>
              {skillComponent}
            </SkillHoc>
          </div>
        );
      })}
    </>
  );
};

export default SkillLabels;

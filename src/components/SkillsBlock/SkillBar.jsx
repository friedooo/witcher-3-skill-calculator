import React from "react";
import { useSelector, useDispatch } from "react-redux";

import SkillHoc from "../../hoc/SkillHoc";

import SkillLabelsArr from "../../images/SkillLabels";
import CombatArr from "../../images/Combat";
import SignsArr from "../../images/SIgns";
import AlchemyArr from "../../images/Alchemy";
import PointButton from "./PointButton";

import {
  plusSkillPoint,
  minusSkillPoint,
  clearSkill,
  switchBranch,
} from "../../redux/actions/skills_a";

function SkillBar() {
  const skillsObj = {
    combat: CombatArr,
    signs: SignsArr,
    alchemy: AlchemyArr,
  };

  const skillsStore = useSelector(({ skills }) => skills);
  console.log(skillsStore);
  const activeBranch = useSelector(({ skills }) => skills.activeBranch);
  const dispatch = useDispatch();

  const onPlusPoint = (branch, row, skill) => {
    dispatch(plusSkillPoint(branch, row, skill));
  };
  const onMinusPoint = () => {
    dispatch(minusSkillPoint("combat", 1, "Muscle Memory"));
  };
  const onClearSkill = () => {
    dispatch(clearSkill("combat", 1, "Muscle Memory"));
  };

  const onSwitchBranch = (branch) => {
    dispatch(switchBranch(branch));
  };

  return (
    <div className="skill-bar">
      {/* <button onClick={onPlusPoint}>+</button>
      <button onClick={onMinusPoint}>-</button>
      <button onClick={onClearSkill}>clear</button> */}
      <div className="content">
        {SkillLabelsArr.map(({ skillName, skillComponent }) => {
          return (
            <div className="skill">
              <SkillHoc onClick={() => onSwitchBranch(skillName)}>
                {skillComponent}
              </SkillHoc>
            </div>
          );
        })}
        <div className="skill-info">
          <span>Умения</span>
          <span>Очков потрачено: 1</span>
        </div>
        {skillsObj[activeBranch].map((skill, i) => {
          const row = Math.floor(i / 5);
          const points =
            skillsStore[activeBranch][row][skill.skillName]["points"];

          return (
            <div className="skill" key={i}>
              <SkillHoc class={activeBranch} counter points={points}>
                <PointButton
                  onClick={() =>
                    onPlusPoint(activeBranch, row, skill.skillName)
                  }
                />
                {skill.skillComponent}
              </SkillHoc>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillBar;

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import SkillHoc from "../../hoc/SkillHoc";

import SkillLabelsArr from "../../images/SkillLabels";
import CombatArr from "../../images/Combat";
import SignsArr from "../../images/SIgns";
import AlchemyArr from "../../images/Alchemy";
import PointButton from "./PointButton";
import AvailableSkills from "./AvailableSkills";

import {
  plusSkillPoint,
  minusSkillPoint,
  clearSkill,
  switchBranch,
  addSpentPoint,
} from "../../redux/actions/skills_a";

function SkillBar() {
  const skillsObj = {
    combat: CombatArr,
    signs: SignsArr,
    alchemy: AlchemyArr,
  };

  const skillsStore = useSelector(({ skills }) => skills);
  const activeBranch = useSelector(({ skills }) => skills.activeBranch);
  const rowStates = useSelector(({ skills }) => skills.rowStates);
  const availablePoints = useSelector(({ skills }) => skills.availablePoints);
  const dispatch = useDispatch();

  const onSwitchBranch = (branch) => {
    dispatch(switchBranch(branch));
  };

  class ButtonEvents {
    constructor(branch, row, skill) {
      this.branch = branch;
      this.row = row;
      this.skill = skill;
    }

    plusPoint() {
      dispatch(plusSkillPoint(this.branch, this.row, this.skill));
    }

    minusPoint() {
      dispatch(minusSkillPoint(this.branch, this.row, this.skill));
    }

    clearSkill() {
      dispatch(clearSkill(this.branch, this.row, this.skill));
    }
  }

  React.useEffect(() => {
    // dispatch(plusSkillPoint("combat", 1, "Muscle Memory"));
    // dispatch(plusSkillPoint("combat", 1, "Muscle Memory"));
    // console.log(availablePoints);
  }, []);

  return (
    <div className="skill-bar">
      <div className="content">
        {SkillLabelsArr.map(({ skillName, skillComponent }, i) => {
          return (
            <div className="skill" key={i}>
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
          const pointsLimit =
            skillsStore[activeBranch][row][skill.skillName]["pointsLimit"];
          return (
            <div
              className={`skill ${
                rowStates[activeBranch][row]["mode"] === "disabled"
                  ? "disabled-skill"
                  : null
              }`}
              key={i}
            >
              <SkillHoc
                // не забудь, описание скилов должно быть показано и для disabled скилов!
                // хз как это сделать пока что
                class={activeBranch}
                counter
                points={points}
                pointsLimit={pointsLimit}
              >
                {rowStates[activeBranch][row]["mode"] === "editable" ? (
                  <PointButton
                    onClick={
                      new ButtonEvents(activeBranch, row, skill.skillName)
                    }
                  />
                ) : null}

                {skill.skillComponent}
              </SkillHoc>
            </div>
          );
        })}
      </div>
      <AvailableSkills />
    </div>
  );
}

export default SkillBar;

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import SkillHoc from "../../hoc/SkillHoc";
import SkillLabels from "./SkillLabels";
import SkillInfo from "./SkillInfo";

import {
  SkillLabelsArr,
  CombatArr,
  SignsArr,
  AlchemyArr,
  GeneralArr,
} from "../../images";

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
    general: GeneralArr,
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
        <SkillLabels switchBranch={onSwitchBranch} skillArr={SkillLabelsArr} />
        <SkillInfo />
        {skillsObj[activeBranch].map((skill, i) => {
          const row = Math.floor(i / 5);
          const points =
            skillsStore[activeBranch][row][skill.skillName]["points"];
          const pointsLimit =
            skillsStore[activeBranch][row][skill.skillName]["pointsLimit"];
          const mode = rowStates[activeBranch][row]["mode"];
          return (
            <div
              className={`skill ${
                mode === "disabled" ? "disabled-skill" : null
              }`}
              key={i}
            >
              <SkillHoc
                // не забудь, описание скилов должно быть показано и для disabled скилов!
                // хз как это сделать пока что
                class={
                  skillsStore[activeBranch][row][skill.skillName]["points"]
                    ? `${activeBranch}-activated`
                    : activeBranch
                }
                counter
                points={points}
                pointsLimit={pointsLimit}
              >
                {mode === "editable" ? (
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

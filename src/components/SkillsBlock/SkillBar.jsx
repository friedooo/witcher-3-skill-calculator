import React from "react";
import { useSelector, useDispatch } from "react-redux";

import SkillHoc from "../../hoc/SkillHoc";

// import {
//   CombatSkills,
//   Signs,
//   AlchemySkills,
//   GeneralSkills,
//   Mutagens,
// } from "../../images/SkillLabels";

// import {
//   FastAttack,
//   StrongAttack,
//   Defense,
//   Marksmanship,
//   BattleTrance,
//   MuscleMemory,
//   StrengthTraining,
//   ArrowDeflection,
//   LightningReflexes,
//   Resolve,
//   PreciseBlows,
//   CrushingBlows,
//   FleetFooted,
//   ColdBlood,
//   Undying,
//   Whirl,
//   Rend,
//   Counterattack,
//   AnatomicalKnowledge,
//   RazorFocus,
//   CripplingStrikes,
//   SunderArmor,
//   DeadlyPrecision,
//   CripplingShot,
//   FloodOfAnger,
// } from "../../images/Combat";

import SkillLabelsArr from "../../images/SkillLabels";
import CombatArr from "../../images/Combat";
import SignsArr from "../../images/SIgns";
import AlchemyArr from "../../images/Alchemy";
import PointButton from "./PointButton";

import {
  plusSkillPoint,
  minusSkillPoint,
  clearSkill,
} from "../../redux/actions/skills_a";

function SkillBar() {
  const skills = useSelector(({ skills }) => skills);
  const dispatch = useDispatch();

  const onPlusPoint = () => {
    dispatch(plusSkillPoint("combat", 1, "Muscle Memory"));
  };
  const onMinusPoint = () => {
    dispatch(minusSkillPoint("combat", 1, "Muscle Memory"));
  };
  const onClearSkill = () => {
    dispatch(clearSkill("combat", 1, "Muscle Memory"));
  };

  return (
    <div className="skill-bar">
      {/* <button onClick={onPlusPoint}>+</button>
      <button onClick={onMinusPoint}>-</button>
      <button onClick={onClearSkill}>clear</button> */}
      <div className="content">
        {SkillLabelsArr.map((labelSkill) => {
          return (
            <div className="skill">
              <SkillHoc>{labelSkill}</SkillHoc>
            </div>
          );
        })}
        <div className="skill-info">
          <span>Умения</span>
          <span>Очков потрачено: 1</span>
        </div>
        {/* {CombatArr.map((combatSkill) => {
          return (
            <div className="skill">
              <SkillHoc counter points={0}>
                <PointButton />
                {combatSkill}
              </SkillHoc>
            </div>
          );
        })} */}

        {/* {SignsArr.map((signSkill) => {
          return (
            <div className="skill">
              <SkillHoc class="signs" counter points={0}>
                <PointButton />
                {signSkill}
              </SkillHoc>
            </div>
          );
        })} */}

        {AlchemyArr.map((alchemySkill) => {
          return (
            <div className="skill">
              <SkillHoc class="alchemy" counter points={0}>
                <PointButton />
                {alchemySkill}
              </SkillHoc>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillBar;

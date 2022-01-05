import React from "react";
import { useSelector, useDispatch } from "react-redux";

import SkillHoc from "../../hoc/SkillHoc";

import {
  CombatSkills,
  Signs,
  AlchemySkills,
  GeneralSkills,
  Mutagens,
} from "../../images/SkillLabels";

import {
  FastAttack,
  StrongAttack,
  Defense,
  Marksmanship,
  BattleTrance,
  MuscleMemory,
  StrengthTraining,
  ArrowDeflection,
  LightningReflexes,
  Resolve,
  PreciseBlows,
  CrushingBlows,
  FleetFooted,
  ColdBlood,
  Undying,
  Whirl,
  Rend,
  Counterattack,
  AnatomicalKnowledge,
  RazorFocus,
  CripplingStrikes,
  SunderArmor,
  DeadlyPrecision,
  CripplingShot,
  FloodOfAnger,
} from "../../images/Combat";

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
        <div className="skill">
          {/* <CombatSkills /> */}
          <SkillHoc>
            <CombatSkills />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc>
            <Signs />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc>
            <AlchemySkills />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc>
            <GeneralSkills />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc>
            <Mutagens />
          </SkillHoc>
        </div>
        <div className="skill-info">
          <span>Умения</span>
          <span>Очков потрачено: 1</span>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <FastAttack />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <StrongAttack />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <Defense />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <Marksmanship />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <BattleTrance />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <MuscleMemory />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <StrengthTraining />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <ArrowDeflection />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <LightningReflexes />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <Resolve />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <PreciseBlows />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <CrushingBlows />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <FleetFooted />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <ColdBlood />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <Undying />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <Whirl />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <Rend />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <Counterattack />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <AnatomicalKnowledge />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <RazorFocus />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <CripplingStrikes />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <SunderArmor />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <DeadlyPrecision />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <CripplingShot />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter>
            <FloodOfAnger />
          </SkillHoc>
        </div>
      </div>
    </div>
  );
}

export default SkillBar;

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CombatSkills,
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
          <CombatSkills />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          {" "}
          <div className="counter">1</div>
        </div>
        <div className="skill">
          {" "}
          <div className="counter">1</div>
        </div>
        <div className="skill">
          {" "}
          <div className="counter">1</div>
        </div>
        <div className="skill">
          {" "}
          <div className="counter">1</div>
        </div>
        <div className="skill-info">
          <span>Умения</span>
          <span>Очков потрачено: 1</span>
        </div>
        <div className="skill">
          <FastAttack />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <StrongAttack />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <Defense />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <Marksmanship />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <BattleTrance />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <MuscleMemory />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <StrengthTraining />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <ArrowDeflection />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <LightningReflexes />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <Resolve />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <PreciseBlows />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <CrushingBlows />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <FleetFooted />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <ColdBlood />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <Undying />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <Whirl />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <Rend />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <Counterattack />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <AnatomicalKnowledge />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <RazorFocus />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <CripplingStrikes />
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <div className="counter">1</div>
        </div>
        <div className="skill">
          <div className="counter">1</div>
        </div>
      </div>
    </div>
  );
}

export default SkillBar;

import React from "react";
import { useSelector, useDispatch } from "react-redux";

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
      <button onClick={onPlusPoint}>+</button>
      <button onClick={onMinusPoint}>-</button>
      <button onClick={onClearSkill}>clear</button>
      <div className="content">
        <div className="test">1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div className="skill-info">
          <span>Умения</span>
          <span>Очков потрачено: 1</span>
        </div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
    </div>
  );
}

export default SkillBar;

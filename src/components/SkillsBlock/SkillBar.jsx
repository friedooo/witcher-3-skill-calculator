import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Traced from "../../images/Traced.svg";

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
        <div className="test">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 32V64H32H64V32V0H32H0V32ZM44.585 19.25C43.672 20.488 41.525 23.637 39.813 26.25C36.408 31.447 35.864 31.746 33.965 29.458C32.479 27.667 32.536 27.594 40.234 21.385C46.361 16.442 46.823 16.215 44.585 19.25ZM32.699 29.219C40.582 37.041 42.717 40.964 37.157 37.41L34.5 35.712L36.924 38.356C39.188 40.825 39.219 41 37.388 41C35.116 41 21.44 26.636 18.711 21.383L16.922 17.94L20.711 19.512C22.795 20.376 28.19 24.744 32.699 29.219ZM46.615 35.75C44.736 42.074 44.805 42.979 47.396 46.059C48.828 47.761 50 49.516 50 49.96C50 50.404 50.939 51.012 52.087 51.312C53.434 51.665 54.05 52.5 53.825 53.668C53.351 56.134 50.155 56.602 49.349 54.324C46.712 46.865 42.048 44.742 34.587 47.605C30.935 49.006 33.368 46.22 37.587 44.17C41.072 42.477 42.573 40.991 43.837 37.981C45.477 34.075 47.625 32.35 46.615 35.75ZM27.163 41.251C25.366 43.038 22.119 46.523 19.948 48.995C15.287 54.301 14.166 51.879 18.537 45.944C25.453 36.553 27.298 34.87 28.91 36.481C30.27 37.842 30.087 38.343 27.163 41.251Z"
              fill="black"
            />
          </svg>
          <div className="counter">1</div>
        </div>
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

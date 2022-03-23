import React from "react";

function SkillHoc(props) {
  return (
    <div onClick={props.onClick} className={props.class ? props.class : null}>
      {props.children}
      {props.counter ? (
        <div className="counter">
          {props.points}/{props.pointsLimit}
        </div>
      ) : null}
    </div>
  );
}

export default SkillHoc;

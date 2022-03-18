import React from "react";

function SkillHoc(props) {
  return (
    <div className={props.class ? props.class : null}>
      {props.children}
      {props.counter ? <div className="counter">{props.points}</div> : null}
    </div>
  );
}

export default SkillHoc;

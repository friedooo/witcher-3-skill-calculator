import React from "react";

function SkillHoc(props) {
  return (
    <>
      {props.children}
      {props.counter ? <div className="counter">{props.points}</div> : null}
    </>
  );
}

export default SkillHoc;

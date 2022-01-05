import React from "react";

function SkillHoc(props) {
  return (
    <>
      {props.children}
      {props.counter ? <div className="counter">1</div> : null}
    </>
  );
}

export default SkillHoc;

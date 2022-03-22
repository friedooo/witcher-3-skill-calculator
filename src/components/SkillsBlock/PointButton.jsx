import React from "react";

function PointButton(props) {
  return (
    <div className="point-btn">
      <div className="reset">Reset</div>
      <div onClick={props.onClick} className="add">
        +
      </div>
      <div className="remove">-</div>
    </div>
  );
}

export default PointButton;

import React from "react";

function PointButton(props) {
  return (
    <div className="point-btn">
      <div onClick={() => props.onClick.clearSkill()} className="reset">
        Reset
      </div>
      {props.availablePoints ? (
        <div onClick={() => props.onClick.plusPoint()} className="add">
          +
        </div>
      ) : null}

      <div onClick={() => props.onClick.minusPoint()} className="remove">
        -
      </div>
    </div>
  );
}

export default PointButton;

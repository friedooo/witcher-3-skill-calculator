import React from "react";

function AvailableSkills({ availablePoints }) {
  return (
    <div className="avaliable-skills">
      <div className="info">Points available</div>
      <div className="points-number"> {availablePoints} </div>
    </div>
  );
}

export default AvailableSkills;

import React from "react";

const Switch = () => {
  return (
    <div>
      <label className="switch">
        // fixing bug
        {/* <input type="checkbox" /> */}
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;

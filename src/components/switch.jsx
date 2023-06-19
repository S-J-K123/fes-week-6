import React from "react";
import './switch.css'

const Switch = () => {
  return (
    <div>
      <label className="switch">
       
        {/* <input type="checkbox" /> */}
        <input type="checkbox" className="switch-input" />
        {/* <span className="slider round"></span> */}
      </label>
    </div>
  );
};

export default Switch;
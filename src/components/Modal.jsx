import React, { useState } from "react";
import "./modal.css";

const Modal = () => {
  const [data, setData] = useState(1922);

  return (
    <div>
      <div className="range-container">
        <input
          className="range-input"
          type="range"
          min="1922"
          max="2023"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <h1 className="num">{data}</h1>

        <button className="filter-btn">FILTER</button>
      </div>
    </div>
  );
};

export default Modal;
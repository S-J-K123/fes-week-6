import React, { useState } from "react";
import "./modal.css";

const Modal = ({setSelectedYear, selectedYear, filterMovies }) => {


  return (
    <div>
      <div className="range-container">
        <input 
          className="range-input"
          type="range"
          min="1922"
          max="2023"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        />
        <h1 className="num">{selectedYear}</h1>

        <button onClick = {filterMovies} className="filter-btn">FILTER</button>
      </div>
    </div>
  );
};

export default Modal;
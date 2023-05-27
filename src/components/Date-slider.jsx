import React from 'react';

const DateSlider = () => {
    return (
        <div>
        <div className='slider-container'>
<input type="range" defaultValue={0} />
<input type="range" defaultValue={0} />


<button className='filter-btn'>FILTER</button>
        </div>
        </div>
    );
}

export default DateSlider;

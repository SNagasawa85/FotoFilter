import React from 'react';

export default ({min, max, value, handleChange}) => {
    return (
        <div>
        <input type='range'
        min={min}
        max={max} 
        value={value}
        onChange={handleChange}
        />
        </div>
    )
};
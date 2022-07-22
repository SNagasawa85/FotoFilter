import React from 'react';

import styles from '../styles/slider.module.css';

export default ({min, max, value, handleChange}) => {
    return (
        <div>
        <input type='range'
        min={min}
        max={max} 
        value={value}
        onChange={handleChange}
        className={styles.slider}
        />
        </div>
    )
};
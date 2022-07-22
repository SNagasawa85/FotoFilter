import React from 'react';

import styles from '../styles/toolbar.module.css';

export default ({name, active, handleClick}) => {


return(
    <button className={`${active ? styles.active : '' } ${styles.toolbarItem}`} onClick={ handleClick }>
        {name}
    </button>
    )
}
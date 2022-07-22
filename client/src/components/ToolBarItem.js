import React from 'react';

import styles from '../styles/toolbar.module.css';

export default ({name, active, handleClick}) => {


return(
    <button className={`toolbarItem ${active ? 'active' : '' } ${styles.toolbarItem}`} onClick={ handleClick }>
        {name}
    </button>
    )
}
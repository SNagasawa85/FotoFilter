import React from 'react';

export default ({name, active, handleClick}) => {


return(
    <button className={`toolbar-item ${active ? 'active' : '' }`} onClick={ handleClick }>
        {name}
    </button>
    )
}
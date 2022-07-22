
import React, { useState } from 'react';

export default () => {
    const [img, setImg] = useState('');
    const [file, setFile] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(file);
        setImg(file);
    }

    return (
        <div>
            
            <h1>Holy image batman</h1>
            <img src=''/>
            <form onSubmit={ handleSubmit }>
                <input type='file' accept='image/*' onChange={e => {setFile(e.target.value)}}/>
                <button type='submit'>click</button>
            </form>
        </div>
    )
}
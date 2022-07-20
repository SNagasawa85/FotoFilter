import {useState} from 'react';
import React from 'react';


export default (props) => {
    
    const [imgUrl, setImgUrl] = useState('');


    const submitHandler = (e) =>{
        e.preventDefault();
        props.onNewUrl(imgUrl);
    
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Welcome to Foto Fucker</h1>
            <h4>Click here for the tutorial!! ADD LINK HERE</h4>
            <h3>choose an image or upload your own img URL below!</h3>
            <form onSubmit={submitHandler}>
                <label>Image URL: </label>
                <input type='text' onChange={e => setImgUrl(e.target.value)}/>
                <button type='submit'>Get Editing!</button>
            </form>
            <div className='samples'>
                <p>we render our chosen sample images here</p>
                <p>these images will also be links to the sites</p>
            </div>
        </div>
    )
}
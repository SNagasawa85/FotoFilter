import { useState } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from '../styles/landing.module.css';

export default (props) => {

    const [imgUrl, setImgUrl] = useState('');

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        props.onNewUrl(imgUrl);
        navigate('/fotos/custom');
    }

    return (
        <div>
            <h1 className={styles.header}>FotoFiltr</h1>
            <p>A fun, web-based photo editor</p>
            <div className={styles.buttonDiv}>
                <button className={styles.tutorialButton}>Tutorial</button>
            </div>
            <form onSubmit={submitHandler}>
                <div className={styles.formContainer}>
                    <div>
                        <label className={styles.formLabel}>Add your own Image URL: </label><br />
                        <input type='text' onChange={e => setImgUrl(e.target.value)} className={styles.formInput} /><br />
                        <button type='submit' className={styles.formButton}>+</button>
                    </div>
                </div>
            </form>
            <h2 className={styles.subHeader}>OR</h2>
            <h3 className={styles.subHeader}>Choose an image below:</h3>
            <div className={styles.samples}>
                <div className={styles.imageDiv}>
                    <img className={styles.sampleImage} src="https://images.unsplash.com/photo-1658275876886-374d94cd4563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"></img>
                    <img className={styles.sampleImage} src="https://images.unsplash.com/photo-1658260068158-5d328a6e8feb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"></img>
                    <img className={styles.sampleImage} src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1959&q=80"></img>

                </div>
                <div className={styles.imageDiv}>
                <img className={styles.sampleImage} src="https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80"></img>
                <img className={styles.sampleImage} src="https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"></img>
                <img className={styles.sampleImage} src="https://images.unsplash.com/photo-1541356665065-22676f35dd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1941&q=80"></img>
                    
                </div>
                <div className={styles.imageDiv}>
                <img className={styles.sampleImage} src="https://images.unsplash.com/photo-1562796374-8bd211f81cbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"></img>
                <img className={styles.sampleImage} src="https://images.unsplash.com/photo-1536940385103-c729049165e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"></img>
                <img className={styles.sampleImage} src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"></img>
                </div>
            </div>
        </div>
    )
}
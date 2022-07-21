import React, {useState} from 'react';
import ToolBarItem from './ToolBarItem';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/editor.module.css';

export default (props) => {
    
    const toolBar = [
        {
            name: 'Brightness',
            property: 'brightness',
            value: 100,
            range: {
                min: 0,
                max: 200,
            },
            unit: '%'
        },
        {
            name: 'Contrast',
            property: 'contrast',
            value: 100,
            range: {
                min: 0,
                max: 200,
            },
            unit: '%'
        },
        {
            name: 'Saturation',
            property: 'saturate',
            value: 100,
            range: {
                min: 0,
                max: 200,
            },
            unit: '%'
        },
        {
            name: 'Grayscale',
            property: 'grayscale',
            value: 0,
            range: {
                min: 0,
                max: 100,
            },
            unit: '%'
        },
        {
            name: 'Sepia',
            property: 'sepia',
            value: 0,
            range: {
                min: 0,
                max: 100,
            },
            unit: '%'
        },
        {
            name: 'Hue Rotate',
            property: 'hue-rotate',
            value: 0,
            range: {
                min: 0,
                max: 360,
            },
            unit: 'deg'
        },
        {
            name: 'Blur',
            property: 'blur',
            value: 0,
            range: {
                min: 0,
                max: 10,
            },
            unit: 'px'
        },
    ]
    const { url } = props;
    console.log(url);
    const setBGstring = "url('" + url + "')";
    const navigate = useNavigate();

    const [options, setOptions] = useState(toolBar);
    const [selectedOption, setSelectedOption] = useState(0);


    const selectedTool = options[selectedOption];

    const goHome = () => {
        navigate('/');
    }
    return (
        <div className={styles.mainContainer} >
            <div className={styles.imageContainer} id='image' style={ {
                backgroundImage: `url(${url})`, 
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                marginTop: '1%'
                } }> 
                
            </div>
            <div className={styles.titleContainer}>
                <p>F<br/>i<br/>l<br/>t<br/>e<br/>r</p>
                <p>oto</p>
            </div>
            

            <div className={styles.buttonContainer}>
                <button onClick={ goHome }>Home</button>
                <button>Help</button>
                <button>Save</button>
            </div>

            <div>
            </div>

            <div className={styles.toolbarContainer}>
                {options.map((option, idx) => {
                    return (
                        <ToolBarItem
                        key={idx}
                        name={option.name}
                        active={idx === selectedOption}
                        handleClick={()=>setSelectedOption(idx)}  
                        />
                    )
                }
                )}
            </div>


            <div className={styles.sliderContainer}>
                <input type='range' className={styles.slider}/>
            </div>
        </div>
    )
}
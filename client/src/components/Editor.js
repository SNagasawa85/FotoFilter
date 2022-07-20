import React, {useState} from 'react';
import ToolBarItem from './ToolBarItem';

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


    const [options, setOptions] = useState(toolBar);
    const [selectedOption, setSelectedOption] = useState(0);


    const selectedTool = options[selectedOption];


    return (
        <div className='container' >
            <div className='image' id='image' style={ {
                backgroundImage: `url(${url})`, 
                width: '100vw', 
                height: '100vw',
                backgroundRepeat: 'no-repeat'
                } }> 
            {/* <img src={url}/> */}

            </div>
            <div className='toolbar'>
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


            <div className='slider'>

            </div>
        </div>
    )
}
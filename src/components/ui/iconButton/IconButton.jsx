import React from 'react';

import './IconButton.css';

export function IconButton(props) {

    const { text, icon, size, color, onChangeMethod } = props;
    const sizeIcons = {
        sm: "3rem",
        md: "4rem",
        lg: "5rem",
        xl: "6rem"
    }

    return (
        <div className='container-button' onClick={onChangeMethod ? onChangeMethod : null}>
            <div
                className='container-icon'
                style={{
                    color: color ? color : "black",
                    fontSize: size ? sizeIcons[size] : "3rem"
                }}
            >
                {icon}
            </div>
            {text}
        </div>
    )
}

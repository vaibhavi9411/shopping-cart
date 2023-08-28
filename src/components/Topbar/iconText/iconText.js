import React from 'react';
import './iconText.css';

export function IconText({ iconName, name, type }) {
    return (
        <div className={type ? 'shortcut-icons ' + type : 'shortcut-icons'}>
            <span className='icon'>{iconName}</span>
            <span className='name'>{name}</span>
        </div>
    )
}
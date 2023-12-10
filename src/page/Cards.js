import React from 'react';
import './Cards.css';

function Cards({ title, count, pr, color }) {
    return (
        <div className='card' style={{ backgroundColor: color }}>
            <p>{title}</p>
            <h3>{count}</h3>
            <span>{pr}%</span>
        </div>
    )
}

export default Cards
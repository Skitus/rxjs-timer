import React from 'react'
import './Time.scss'


const Time = ({sec}) => {
    return (
        <div className="time">{ new Date(sec * 1000).toISOString().substr(11, 8) }</div>
    )
}

export default Time;
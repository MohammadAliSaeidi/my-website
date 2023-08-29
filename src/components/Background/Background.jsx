import React from 'react';
import './Background.css'
import {ReactComponent as Shape} from "../../assets/pictures/random-shape.svg";

function Background() {
    return <div className='background'>
        <div><Shape/></div>
        <div><Shape/></div>
        <div><Shape/></div>
    </div>
}

export default Background;
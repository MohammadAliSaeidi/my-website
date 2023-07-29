import React from 'react';
import {BsArrowRightShort} from "react-icons/bs";
import Tilt from "react-parallax-tilt";
import './ExperienceItem.css'

function ExperienceItem({expData}) {
    return <div className='card experience'>
        <h3 className='h3'>{expData.title}</h3>
        <p className={'justified-paragraph description'}>{expData.description}</p>
        {expData.links.map(linkData => <ExperienceLink linkData={linkData}/>)}
    </div>
}

function ExperienceLink({linkData}) {
    return <a className='link' target='_blank' href={linkData.url}>
        {linkData.label} <BsArrowRightShort style={{fontSize: 24}}/>
    </a>
}

export default ExperienceItem;
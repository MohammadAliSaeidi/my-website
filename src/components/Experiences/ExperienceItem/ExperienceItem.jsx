import React from 'react';
import {BsArrowRightShort} from "react-icons/bs";
// import Tilt from "react-parallax-tilt";
import './ExperienceItem.css'

function ExperienceItem({expData}) {
    return <div className='card experience'>
        <div className='heading'>
            <h3 className='h3'>{expData.title}</h3>
            {expData.companyName && <div
                className='company-name'>{expData.companyName && expData.companyName + ' · ' + expData.employmentType}
            </div>}
            {expData.startAndEndPeriod && <div className='start-and-end-period'>{expData.startAndEndPeriod}</div>}
            <div className='location'>{expData.location}</div>
        </div>
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
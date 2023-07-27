import React from 'react';
import {ExperiencesData} from './ExperiencesData'
import './Experiences.css'

function Experiences() {
    const experiences = ExperiencesData.map(exp => {
        return <div className='experience'>
            <h3 className='h3'>{exp.title}</h3>
            <p className={'justified-paragraph description'}>{exp.description}</p>
        </div>
    })

    return (
        <div className='experiences'>
            <h2 className='h2'>Experiences</h2>
            {experiences}
        </div>
    );
}

export default Experiences;
import React from 'react';
import {ExperiencesData} from './ExperiencesData'
import './Experiences.css'
import ExperienceItem from "./ExperienceItem";

function Experiences() {
    const experiences = ExperiencesData.map(expData => <ExperienceItem expData={expData}/>)

    return <>
            <h2 className='h2'>Experiences</h2>
            <div className='experiences-container'>
                {experiences}
            </div>
        </>
}

export default Experiences;
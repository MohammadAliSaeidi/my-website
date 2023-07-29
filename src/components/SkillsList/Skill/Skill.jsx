import React from 'react';
import './Skill.css';
import Tilt from 'react-parallax-tilt';

function Skill({style ,skill}) {

    return (
        <Tilt tiltMaxAngleX={9} tiltMaxAngleY={3} >
            <div key={skill.key} className="card skill">
                <div className="title">
                    <span className="icon">{skill.icon}</span>
                    <p className="name">{skill.name}</p>
                </div>
                {skill.description && (
                    <div className="description">
                        {Array.isArray(skill.description) ? (
                            <ul>
                                {skill.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="justified-paragraph">{skill.description}</p>
                        )}
                    </div>
                )}
            </div>
        </Tilt>
    );
}

export default Skill;
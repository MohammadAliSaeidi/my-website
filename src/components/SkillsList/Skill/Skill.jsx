import React from 'react';
import './Skill.css';

function Skill({skill}, ref) {
    return (
        <a ref={ref} key={skill.key} className="skill">
            <div className={'title'}>
                <span className={'icon'}>{skill.icon}</span>
                <p className="name">{skill.name}</p>
            </div>
            {skill.description && <p className="justified-paragraph description">{skill.description}</p>}
        </a>
    );
}

export default React.forwardRef(Skill);

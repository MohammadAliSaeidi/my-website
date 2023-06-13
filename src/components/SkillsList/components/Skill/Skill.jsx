import React from 'react';
import './Skill.css';

const Skill = React.forwardRef(({ key, name, description }, ref) => {
    return (
        <a ref={ref} key={key} className="skill">
            <p className="title">{name}</p>
            {description && <p className="description">{description}</p>}
        </a>
    );
});

export default Skill;

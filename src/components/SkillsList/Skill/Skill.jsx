import React from 'react';
import './Skill.css';

function Skill({ skill }) {
	return (
		<a key={skill.key} className="skill">
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
		</a>
	);
}

export default Skill;

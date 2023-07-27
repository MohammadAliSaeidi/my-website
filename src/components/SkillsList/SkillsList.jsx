import './SkillsList.css'
import Skill from "./Skill";
import {SkillsData} from "./SkillsData";

export default function SkillsList() {

	const skills = SkillsData.map((skill) => (
		<Skill skill={skill}/>
	));

	return (
		<div className="skills-list">
			<h2 className='h2'>SKILLS</h2>
			<div className="list">{skills}</div>
		</div>
	);
}

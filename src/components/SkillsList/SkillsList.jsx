import './SkillsList.css'
import SectionHeading from "../SectionHeading";
import Skill from "./Skill";
import {MySkills} from "./MySkills";

export default function SkillsList() {

	const skills = MySkills.map((skill) => (
		<Skill skill={skill}/>
	));

	return (
		<div className="skills-list">
			<SectionHeading heading={"MY SKILLS"}/>

			<div className="skills-grid">{skills}</div>
		</div>
	);
}

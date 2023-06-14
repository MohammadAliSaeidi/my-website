import './SkillsList.css'
import SectionHeading from "../SectionHeading";
import Skill from "./Skill";
import {MySkills} from "./MySkills";
import {useRef} from "react";

export default function SkillsList() {
    const skillsRef = useRef([]);

    const skills = MySkills.map((skill) => (
        <Skill skill={skill} ref={(ref) => (skillsRef.current[skill.id] = ref)}/>
    ));

    return (
        <div className="skills-list">
            <SectionHeading heading={"MY SKILLS"}/>

            <div className="skills-grid">{skills}</div>
        </div>
    );
}

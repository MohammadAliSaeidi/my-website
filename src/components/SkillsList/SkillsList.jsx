import './SkillsList.css'
import SectionHeading from "../SectionHeading";
import Skill from "./components/Skill";
import SkillButton from "./components/SkillButtons";
import { MySkills } from "./MySkills";
import { useRef } from "react";

export default function SkillsList() {
    const skillsRef = useRef([]);

    const skills = MySkills.map((skill) => (
        <Skill key={skill.id} name={skill.name} description={skill.description} ref={(ref) => (skillsRef.current[skill.id] = ref)} />
    ));

    const skillButtons = MySkills.map((skill) => (
        <SkillButton key={skill.id} name={skill.name} icon={skill.icon} handleOnClick={() => handleOnSkillButtonClick(skill.id)} />
    ));

    function handleOnSkillButtonClick(skillId) {
        if (skillsRef.current[skillId]) {
            skillsRef.current[skillId].scrollIntoView({ behavior: "smooth" });
        }
    }

    function handleOnSkillButtonClick2(skillId) {
        const targetSkill = skillsRef.current.find(skill => skill.key === skillId);
        if (targetSkill) {
            const { top, bottom } = targetSkill.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const scrollOffset = (windowHeight - (bottom - top)) / 2; // Calculate the scroll offset to center the skill

            window.scrollTo({
                top: window.scrollY + top - scrollOffset,
                behavior: 'smooth',
            });
        }
    }

    return (
        <div className="skills-list">
            <SectionHeading heading={"MY SKILLS"} />

            <div className="skill-buttons">{skillButtons}</div>

            <div className="skills-grid">{skills}</div>
        </div>
    );
}

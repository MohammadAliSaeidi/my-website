import {ReactComponent as ReactIcon} from "../../assets/pictures/Icons/react.svg";
import {ReactComponent as GitIcon} from "../../assets/pictures/Icons/git-alt.svg";
import {ReactComponent as DesignPatternIcon} from "../../assets/pictures/Icons/widgets.svg";
import {ReactComponent as AgileIcon} from "../../assets/pictures/Icons/Agile.svg";
import {ReactComponent as CleanCodeIcon} from "../../assets/pictures/Icons/code-solid.svg";
import {ReactComponent as FigmaIcon} from "../../assets/pictures/Icons/figma.svg";
import {ReactComponent as PhotoshopIcon} from "../../assets/pictures/Icons/photoshop-icon.svg";
import {ReactComponent as IllustratorIcon} from "../../assets/pictures/Icons/illustrator-icon.svg";

export const MySkills = [
	{
		name: 'React',
		description: 'Core Concepts, Hooks, Libraries and Tools like React Router, Redux, Material UI, Ant Design, SASS preprocessor. Additional Libraries and Tools like, Swiper, Axios, JSON-Server (experience with creating custom routes)',
		icon: <ReactIcon/>,
		id: 0,
	},
	{
		name: 'Git',
		description: '',
		icon: <GitIcon/>,
		id: 1,
	},
	{
		name: 'Design Patterns',
		description: 'Common Design Patterns like Singleton, MVC, Abstract Factory, etc.',
		icon: <DesignPatternIcon/>,
		id: 2,
	},
	{
		name: 'Agile Principles and Methodologies – Scrum, Microsoft Azure DevOps, Jira',
		description: 'Practical knowledge on concepts like User story, Epics, Sprints, Backlog, Project Management. Experienced in calculating estimated time for tasks using formula. Experience participating in meetings to plan and prioritize tasks.',
		icon: <AgileIcon/>,
		id: 3
	},
	{
		name: 'Clean Code principles',
		description: '',
		icon: <CleanCodeIcon/>,
		id: 4
	},
	{
		name: 'Figma',
		description: '',
		icon: <FigmaIcon/>,
		id: 5
	},
	{
		name: 'Adobe Photoshop',
		description: '',
		icon: <PhotoshopIcon/>,
		id: 6,
	},
	{
		name: 'Adobe Illustrator',
		description: '',
		icon: <IllustratorIcon/>,
		id: 7
	},
]
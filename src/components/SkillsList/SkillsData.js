import {ReactComponent as ReactIcon} from "../../assets/pictures/Icons/React-icon.svg";
import {ReactComponent as NextjsIcon} from '../../assets/pictures/Icons/nextjs.svg'
import {ReactComponent as GitIcon} from "../../assets/pictures/Icons/git.svg";
import {ReactComponent as DesignPatternIcon} from "../../assets/pictures/Icons/design-patterns.svg";
import {ReactComponent as AgileIcon} from "../../assets/pictures/Icons/Agile.svg";
import {ReactComponent as CleanCodeIcon} from "../../assets/pictures/Icons/code-solid.svg";
import {ReactComponent as FigmaIcon} from "../../assets/pictures/Icons/figma.svg";
import {ReactComponent as PhotoshopIcon} from "../../assets/pictures/Icons/photoshop.svg";
import {ReactComponent as IllustratorIcon} from "../../assets/pictures/Icons/illustrator-icon.svg";
import {ReactComponent as ReduxIcon} from "../../assets/pictures/Icons/redux.svg";
import {ReactComponent as UXLogo} from "../../assets/pictures/Icons/UXlogo.svg";

export const SkillsData = [
	{
		name: "React",
		description:
			"Core Concepts, Hooks, Libraries and Tools like React Router, Material UI, Ant Design, Swiper, Axios, JSON-Server",
		icon: <ReactIcon />,
		id: 0,
	},
	{
		name: "Redux and Redux toolkit",
		icon: <ReduxIcon />,
		id: 1,
	},
	{
		name: "NEXT.js",
		description:
			"Dynamic Routing, SSR (Server-Side Rendering), SSG (Static Site Generation), " +
			"ISR (Incremental Static Regeneration), CSR (Client-Side Rendering)",
		icon: <NextjsIcon />,
		id: 2,
	},
	{
		name: "Next Auth",
		description:
			"Basic practical knowledge of Next Auth for Next.js apps, including providers, credentials, " +
			"and session management. Some experience with credentials authentication, and adapters like Prisma.",
		icon: (
			<img
				src={process.env.PUBLIC_URL + "/images/logo/next-auth.png"}
				alt=""
			/>
		),
		id: 3,
	},
	{
		name: "Git",
		description: "",
		icon: <GitIcon />,
		id: 4,
	},
	{
		name: "Design Patterns",
		description:
			"Common Design Patterns like Singleton, MVC, Abstract Factory, etc.",
		icon: <DesignPatternIcon />,
		id: 5,
	},
	{
		name: "Agile Principles and Methodologies – Scrum, Microsoft Azure DevOps, Jira",
		description:
			"Practical knowledge on concepts like User story, Epics, Sprints, Backlog, Project Management. " +
			"Experienced in calculating estimated time for tasks using formula. Experiences participating in meetings " +
			"to plan and prioritize tasks.",
		icon: <AgileIcon />,
		id: 6,
	},
	{
		name: "Clean Code principles",
		description: "",
		icon: <CleanCodeIcon />,
		id: 7,
	},
	{
		name: "Figma",
		description: "",
		icon: <FigmaIcon />,
		id: 8,
	},
	{
		name: "Adobe Photoshop",
		description: "",
		icon: <PhotoshopIcon />,
		id: 9,
	},
	{
		name: "Adobe Illustrator",
		description: "",
		icon: <IllustratorIcon />,
		id: 10,
	},
	{
		name: "User Experience",
		description: "",
		icon: <UXLogo />,
		id: 11,
	},
];
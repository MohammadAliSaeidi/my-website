import { ReactComponent as ReactIcon } from "../../assets/pictures/Icons/React-icon.svg";
import { ReactComponent as NextjsIcon } from "../../assets/pictures/Icons/nextjs.svg";
import { ReactComponent as GitIcon } from "../../assets/pictures/Icons/git.svg";
import { ReactComponent as DesignPatternIcon } from "../../assets/pictures/Icons/design-patterns.svg";
import { ReactComponent as AgileIcon } from "../../assets/pictures/Icons/Agile.svg";
import { ReactComponent as CleanCodeIcon } from "../../assets/pictures/Icons/code-solid.svg";
import { ReactComponent as FigmaIcon } from "../../assets/pictures/Icons/figma.svg";
import { ReactComponent as PhotoshopIcon } from "../../assets/pictures/Icons/photoshop.svg";
import { ReactComponent as ReduxIcon } from "../../assets/pictures/Icons/redux.svg";
import { ReactComponent as UXLogo } from "../../assets/pictures/Icons/UXlogo.svg";
import { ReactComponent as TailwindCssLogo } from "../../assets/pictures/Icons/Tailwind_CSS_Logo.svg";
import { ReactComponent as MaterialUI } from "../../assets/pictures/Icons/material-ui.svg";
import { ReactComponent as AntDesign } from "../../assets/pictures/Icons/ant-design.svg";
import { ReactComponent as Bootstrap } from "../../assets/pictures/Icons/Bootstrap_logo.svg";

export const SkillsData = [
	{
		name: "React",
		description:
			"Core Concepts, Hooks, Context, Libraries and Tools like React Router, Swiper, Axios, JSON-Server, React hook form, Mongoose",
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
			"Dynamic Routing, SSR, SSG, ISR, CSR, as well as Basic practical knowledge about Mongo DB and Docker",
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
		name: "Material UI",
		icon: <MaterialUI />,
		id: 5,
	},
	{
		name: "Ant Design",
		icon: <AntDesign />,
		id: 6,
	},
	{
		name: "Tailwind CSS",
		description: "",
		icon: <TailwindCssLogo />,
		id: 7,
	},
	{
		name: "Bootstrap",
		icon: <Bootstrap />,
		id: 8,
	},
	{
		name: "Design Patterns",
		description:
			"Common Design Patterns like Singleton, MVC, Abstract Factory, etc.",
		icon: <DesignPatternIcon />,
		id: 9,
	},
	{
		name: "Agile Principles and Methodologies – Scrum, Microsoft Azure DevOps, Jira",
		description:
			"Practical knowledge on concepts like User story, Epics, Sprints, Backlog, Project Management. " +
			"Experienced in calculating estimated time for tasks using formula. Experiences participating in meetings " +
			"to plan and prioritize tasks.",
		icon: <AgileIcon />,
		id: 10,
	},
	{
		name: "Clean Code principles",
		description: "",
		icon: <CleanCodeIcon />,
		id: 11,
	},
	{
		name: "Figma",
		description: "",
		icon: <FigmaIcon />,
		id: 12,
	},
	{
		name: "Adobe Photoshop",
		description: "",
		icon: <PhotoshopIcon />,
		id: 13,
	},
	{
		name: "User Experience",
		description: "",
		icon: <UXLogo />,
		id: 14,
	},
];

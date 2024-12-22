import {
    BsCreditCardFill,
    BsStack,
} from "react-icons/bs";
import { FaHandshakeAngle } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";
import {
    BsRocketTakeoff,
    BsHandIndex,
    BsPeople,
    BsStars,
    BsSun
} from "react-icons/bs";
import {FcGraduationCap} from "react-icons/fc";

// Define a type for the icon component
type IconType = typeof BsSun;

// Define the structure for the `data` array
interface DataItem {
    icon: IconType;
    title: string;
    paragraph: string;
}

// Define the structure for the `stats` array
interface StatsItem {
    id: number;
    name: string;
    value: string;
}

// Define the structure for the `aboutStats` array
interface AboutStatItem {
    label: string;
    value: string;
}

// Define the structure for the `aboutValues` array
interface AboutValueItem {
    name: string;
    description: string;
    icon: IconType;
}

// Define the structure for the `aboutTeam` array
interface TeamMember {
    name: string;
    role: string;
    imageUrl: string;
    location: string;
}

// Types for the `aboutBenefits` array
type Benefit = string;

// Export data with types applied
export const data: DataItem[] = [
    {
        icon: BsStack,
        title: "Work/Office Space/Conference Room",
        paragraph:
            "Our office spaces and conference room are very comfortable with access to internet and electricity. A safe space for everyone to brainstorm and have their meetings affordably",
    },
    {
        icon: FaHandshakeAngle,
        title: "Trainings",
        paragraph:
            "We offer training of agricultural value chain with hands on practicals. We do monthly awareness trainings on innovative and sustainable agricultural practices.",
    },
    {
        icon: BsCreditCardFill,
        title: "Consultation Services",
        paragraph:
            "Whether you’re a newbie or already in business, or you don’t even know what to do at all, we are always here to give you the right directions on how to start and how to go about it, an even how to access market. We offer a one on one consultancy with experts.",
    },
    {
        icon: FaAward,
        title: "Community Engagements",
        paragraph:
            "We engage our community by having a monthly discussions on innovation in agriculture and new practices, by trying to create a community of people that can help and share ideas on their business where we can also foster collaborations and partnerships among stakeholders",
    },

];

export const stats: StatsItem[] = [
    { id: 1, name: "Funding", value: "1M+" },
    { id: 2, name: "Events and Workshops", value: "9" },
    { id: 3, name: "Communities", value: "10" },
    { id: 4, name: "Startups", value: "20" },
    { id: 5, name: "Members Organizations", value: "60" },
    { id: 6, name: "Individual Members", value: "1000+" },
];

export const aboutStats: AboutStatItem[] = [
    { label: "Business was founded", value: "2012" },
    { label: "People on the team", value: "120+" },
    { label: "Users on the platform", value: "250k" },
    { label: "Paid out to creators", value: "$70M" },
];

export const aboutValues: AboutValueItem[] = [
    {
        name: "Be world-class.",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
        icon: BsRocketTakeoff,
    },
    {
        name: "Take responsibility.",
        description:
            "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
        icon: BsHandIndex,
    },
    {
        name: "Be supportive.",
        description:
            "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.",
        icon: BsPeople,
    },
    {
        name: "Always learning.",
        description:
            "Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.",
        icon: FcGraduationCap,
    },
    {
        name: "Share everything you know.",
        description:
            "Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.",
        icon: BsStars,
    },
    {
        name: "Enjoy downtime.",
        description:
            "Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.",
        icon: BsSun,
    },
];

export const aboutTeam: TeamMember[] = [
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        location: "Toronto, Canada",
    },
    // More people...
];

export const aboutBenefits: Benefit[] = [
    "Competitive salaries",
    "Flexible work hours",
    "30 days of paid vacation",
    "Annual team retreats",
    "Benefits for you and your family",
    "A great work environment",
];

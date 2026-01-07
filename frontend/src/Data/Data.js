import OpenHammerPro from "../assets/Projects/OpenHammerPro.jpg";
import CureNowPro from "../assets/Projects/CureNowPro.jpg";
import PortFolioPro from "../assets/Projects/PortFolioPro.jpg";
import GitHub from "../assets/Profiles/Github.svg";
import GFG from "../assets/Profiles/GFG.svg";
import Leetcode from "../assets/Profiles/Leetcode.png";
import Linkdin from "../assets/Profiles/Linkdin.png";
import Instagram from "../assets/Profiles/Instagram.png";
import Youtube from "../assets/Profiles/Youtube.png";
import Cpp from "../assets/Skills/C++.svg";
import HTML from "../assets/Skills/HTML.svg";
import CSS from "../assets/Skills/CSS.svg";
import JavaScript from "../assets/Skills/JavaScript.svg";
import ReactJs from "../assets/Skills/ReactJs.svg";
import Redux from "../assets/Skills/Redux.svg";
import TailwindCSS from "../assets/Skills/TailwindCSS.svg";
import NodeJs from "../assets/Skills/NodeJs.svg";
import ExpressJs from "../assets/Skills/ExpressJs.svg";
import MongoDb from "../assets/Skills/MongoDb.svg";
import MySql from "../assets/Skills/MySql.svg";
import Github from "../assets/Skills/Github.svg";
export const skills = [
  { name: "C++", icon: Cpp },
  { name: "HTML5", icon: HTML },
  { name: "CSS3", icon: CSS },
  { name: "JavaScript", icon: JavaScript },
  { name: "React.js", icon: ReactJs },
  { name: "Node.js", icon: NodeJs },
  { name: "Express.js", icon: ExpressJs },
  { name: "MongoDB", icon: MongoDb },
  { name: "MySQL", icon: MySql },
  { name: "TailwindCSS", icon: TailwindCSS },
  { name: "Redux", icon: Redux },
  { name: "GitHub", icon: Github },
];
export const navItems = [
  { name: "Home", link: "#home" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Profiles", link: "#profiles" },
  { name: "Contact", link: "#contact" },
];
export const projectsData = [
  {
    title: "Doctor Appointment Booking System",
    description:
      "A full-stack doctor appointment booking system built with React, Node.js, and MongoDB.",
    image: CureNowPro,
    github: "https://github.com/Inderjeet1Singh/CureNow",
    live: "https://curenow.netlify.app/",
  },
  {
    title: "Online Auction Platform",
    description:
      "An online auction platform allowing users to bid on products in real-time, built with React and Node.js.",
    image: OpenHammerPro,
    github: "https://github.com/Open-Hammer/OpenHammer",
    live: "https://openhammer-online-auction-website.onrender.com/",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and skills, built using React and Tailwind CSS.",
    image: PortFolioPro,
    github: "https://github.com/Inderjeet1Singh/Portfolio",
    live: "https://inderjeetsportfolio.onrender.com/",
  },
];
export const profiles = [
  {
    name: "GitHub",
    link: "https://github.com/Inderjeet1Singh",
    logo: GitHub,
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/Inder_1845/",
    logo: Leetcode,
  },
  {
    name: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org/profile/inderjeet2singh",
    logo: GFG,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/inderjeet8199/",
    logo: Linkdin,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/inderjeet01845/",
    logo: Instagram,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@NitianInder",
    logo: Youtube,
  },
];

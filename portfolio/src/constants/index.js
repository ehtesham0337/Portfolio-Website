import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  carrent,
  jobit,
  tripguide,
  // threejs,
} from "../assets";

// company logos
import nccs from "../assets/nccs.png";
import transviti from "../assets/transviti.jpg";
import gdscLOGO from "../assets/gdscLOGO.png";
// tech logos
import nextjs from "../assets/nextjs.png";
import mui from "../assets/mui.png";
import antd from "../assets/antd.png";
import springboot from "../assets/tech/spring-boot.png";
import PostgreSQL from "../assets/tech/PostgreSQL.svg";
import bootstraplogo from "../assets/bootstraplogo.png";
import firebase from "../assets/tech/firebase.png";
import techwards from "../assets/tech/techwards.jpg";
import cpp_logo from "../assets/cpp_logo.png";
import python from "../assets/python.png";
// project logos
import codec from "../assets/codec.png";
import weather from "../assets/weather.png";
import gps from "../assets/gps.png";
import mandelbrot from "../assets/mandelbrot.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "DevOps Explorer",
    icon: backend,
  },
  {
    title: "GDSC Lead",
    icon: creator,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Ant Design",
    icon: antd,
  },
  // {
  //   name: "Mantine UI",
  //   icon: mantineUI,
  // },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstraplogo,
  },
  {
    name: "C++",
    icon: cpp_logo,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Digital Forensics Intern",
    company_name: "NCCS NED",
    icon: nccs,
    iconBg: "#E6DEDD",
    date: "March 2022 - May 2022",
    points: [
      "Analyzed malware samples statically & dynamically in an air-gapped VirtualBox network using IDA.",
      "Retrieved data from a factory reset Android version 5.0 phone and wiped USB drives using Autopsy.",
      "Documented safe security practices, setting up an isolated malware machine, identifying malicious emails, and preventing phishing attacks.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Transviti",
    icon: transviti,
    iconBg: "#fff",
    date: "September 2022 - March 2023",
    points: [
      "Developed and delivered web applications using React.js, Redux and other UI related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Integrated REST APIs with the project frontend and ensured responsiveness and cross-browser compatibility.",
      "Shipped various modern frontend features by writing clean, readable, and maintainable code.",
    ],
  },
  {
    title: "GDSC LEAD",
    company_name: "Google Developer Student Clubs",
    icon: gdscLOGO,
    iconBg: "#fff",
    date: "October 2021 - Present",
    points: [
      "Raised tech awareness in my university through events and workshops.",
      "Organized talks and speaker sessions on modern technologies.",
      "Collaborated with other leads to execute events and bootcamps.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Techwards",
    icon: techwards,
    iconBg: "#fff",
    date: "October 2023 - Present",
    points: []
  },
];

const projects = [
  {
    name: "Codec Support",
    description:
      "A ticket based support system where users can open a ticket describing their issue, add notes etc. When their issue is resolved, they can close the ticket.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node.js (Express)",
        color: "pink-text-gradient",
      },
    ],
    image: codec,
    source_code_link: "https://github.com/ehtesham0337/Codec-Support",
    live_link: "https://codec-support.netlify.app/",
  },
  {
    name: "Country Weather",
    description:
      "An app that shows data like the capital, area, languages, and the weather of the country searched. The search bar filters and displays a list of searched countries.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "OpenWeatherAPI",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/ehtesham0337/Country-Weather-Data",
    live_link: "https://countryweatherdata.netlify.app",
  },
  {
    name: "GPS Attendance System",
    description:
      "A GPS based attendance system for attendees and organizers of events and attendance can be opened for a certain time interval.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "MantineUI",
        color: "pink-text-gradient",
      },
    ],
    image: gps,
    source_code_link: "https://github.com/ehtesham0337/GPS-Attendence-System",
  },
  {
    name: "Mandelbrot Set Visualizer",
    description:
      "A graphical representation of Mandelbrot and Julia sets along with Iteration Orbits.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
      {
        name: "Windows Form",
        color: "pink-text-gradient",
      },
    ],
    image: mandelbrot,
    source_code_link: "https://github.com/ehtesham0337/Drawing",
  },
];

export { services, technologies, experiences, projects };

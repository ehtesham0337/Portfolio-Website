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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import nccs from "../assets/nccs.png";
import transviti from "../assets/transviti.jpg";
import gdscLOGO from "../assets/gdscLOGO.png";
import nextjs from "../assets/nextjs.png";
import mui from "../assets/mui.png";
import antd from "../assets/antd.png";
import mantineUI from "../assets/mantineUI.png";
import bootstraplogo from "../assets/bootstraplogo.png";
import cpp_logo from "../assets/cpp_logo.png";
import python from "../assets/python.png";

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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Ant Design",
    icon: antd,
  },
  {
    name: "Mantine UI",
    icon: mantineUI,
  },
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
    name: "MongoDB",
    icon: mongodb,
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
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

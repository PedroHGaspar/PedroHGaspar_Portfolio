import {
  mobile,
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  avanti,
  zaz,
  web,
  creator
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.Js Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
  {
    title: "Beginner Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "ZazTech",
    icon: zaz,
    iconBg: "#383E56",
    date: "May 2022 - August 2022",
    points: [
      "Developing and maintaining web applications using HTML5, CSS3, Javascript and PHP",
      "Implementing responsive design for desktop, rarely for mobile.",
      "My goal here was to obtained experience in my first job as an intern, it was good, but the company was small and it uses only old technologies like PHP, and I didn't see myself growing there.",
    ],
  },
  {
    title: "React Developer",
    company_name: "AVANTI",
    icon: avanti,
    iconBg: "#E6DEDD",
    date: "November 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, HTML5, CSS3, VTEX Node.js and Typescript.  ",
      "Collaborating with cross-functional teams including designers, product managers and other developers to create high quality products for our clients.",
      "Implementing responsive design for all devices and ensuring cross-browser compatibility with diferent environments.",
      "I'm evolving in AVANTI as a Front End Developer. I'm still a junior dev, but i'm developing in React.JS(🖤), and training frameworks like Three.js for 3D application improvements and Tailwind for css. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "A helpfull colleague that everyone wants, always available to help other devs.",
    name: "João Victor",
    designation: "Front-End Developer",
    company: "AVANTI",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "He helped me to learn and study front end techniques! Good friend, always helping us in our classes.",
    name: "Alexsander Zunino",
    designation: "Student",
    company: "SENAI",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
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
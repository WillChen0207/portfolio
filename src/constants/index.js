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
  vehicletest,
  mentorproject,
  virtuallab,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  mentorimg,
  threejs,
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
    title: "UE Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "VehicleTest",
    company_name: "Three.JS",
    icon: vehicletest,
    iconBg: "#383E56",
    date: "Nov 2021 - Jan 2022",
    points: [
      "Educational game.",
      "Collaborating with @Yoraguy, one of my classmates, designed a small game with Three.JS.",
      "Get to know responsive design, and built several other demos."
    ],
  },
  {
    title: "MentorProject",
    company_name: "SpringMVC",
    icon: mentorproject,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Jul 2022",
    points: [
      "Database Development course design.",
      "Collaborating with @Yoraguy, @Bootree, @dlkkkk, @chenhj, designed a website with Vue and Springboot",
      "Full stack development(almost). Registered software copyright."
    ],
  },
  {
    title: "VirtualLab",
    company_name: "Unreal Engine 5",
    icon: virtuallab,
    iconBg: "#383E56",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Immersive virtual lab.",
      "Collaborating with @Yoraguy, @Bootree, @Huangxw, self-taught UE5, developed a demo of virtual lab for physic experiments",
      "Learnt how to develop in UE. Now developing a VR picture book."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "The task seems unconquerable until William appears.",
    name: "Yoraguy",
    designation: "Backend developer",
    company: "MentorProject",
    image: "https://avatars.githubusercontent.com/u/90680369?v=4",
  },
  {
    testimonial:
      "He's ambitious as well as skilled. We cannot reach anything without his efforts.",
    name: "Bootree",
    designation: "Frontend developer",
    company: "MentorProject",
    image: "https://avatars.githubusercontent.com/u/94850815?v=4",
  }
];

const projects = [
  {
    name: "Mentor Project",
    description:
      "Web-based platform that allows students to select tutors, as versa, providing an convenient and efficient solution for tutor-selection needs.",
    tags: [
      {
        name: "Springboot",
        color: "blue-text-gradient",
      },
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: mentorimg,
    source_code_link: "https://github.com/WillChen0207/MentorProjectDemo",
  }
];

export { services, technologies, experiences, testimonials, projects };

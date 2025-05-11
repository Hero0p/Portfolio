import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer and machine learning engineer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React.js & Tailwind CSS, as well as back-end technologies like Node.js, MySQL, Express.js, MongoDB , Python, C++ & Flask. I also have experience in building machine learning & deep learning models using TensorFlow and PyTorch. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a full stack and machine learning engineer skilled in the MERN stack (MongoDB, Express.js, React.js, Node.js), Python, and C++. I build web applications and ML systems that are efficient, scalable, and user-friendly. I have experience creating RESTful APIs, working with databases, and developing responsive front-ends. On the ML side, I’ve worked on projects involving natural language processing, computer vision, and generative AI using TensorFlow and PyTorch. I enjoy solving real-world problems and creating software that makes a positive impact through simple, practical solutions.`;


export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "LearnEz",
    image: project1,
    description:
      "A fully functional ed-tech website with features like video lectures/courses, generative video solutions/explanation and AI integrated Whiteboard.",
    technologies: ["HTML", "CSS", "Flask", "Python"]
  },
  {
    title: "CourtClerk",
    image: project2,
    description:
      "A web application for Providing legal assistance. CourtClerk is an AI Chat Specialized in handling legal related queries and issues.",
    technologies: ["MongoDB", "Node.js", "Express.js", "EJS", "Socket.io", "Python"],
  },
  {
    title: "CampusFind",
    image: project3,
    description:
      "A simple web application for lost and found system of colleges and universities.",
    technologies: ["HTML", "CSS", "Python", "Flask", "CSV"],
  },
  {
    title: "TourCraze",
    image: project4,
    description:
      "Airbnb clone for booking hotels and tours.",
    technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap",],
  },
  {
    title: "Portfolio",
    image: project5,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js", "Tailwind CSS", "Framer-Motion", "Vite"],
  },
];

export const CONTACT = {
  address: "Bennett University, Greater Noida, Uttar Pradesh, India ",
  phoneNo: "+91 62654-24813 ",
  email: "nishantc3110@gmail.com",
};

import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with a knack for crafting robust and scalable mobile and web applications. I have honed my skills in front-end technologies like React and Next.js and back-end technologies like Node.js, MySQL, Firebase, MongoDB, and Frameworks like Flutter.`;

export const ABOUT_TEXT = `I'm an undergraduate pursuing the BSc (Hons) in Computing and Information Systems degree program at the Sabaragamuwa University of Sri Lanka, seeking a Software Engineer internship.I am an enthusiastic, self-motivated, and hardworking learner who prefers a hands-on approach to learning. Intend to work hard for the advancement of any project that I’m working on. I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.
`;

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
    title: "MeterMate App",
    image: project1,
    description:
      "MeterMate, a mobile application designed to revolutionize the way we manage and read electricity meters.",
    technologies: ["Flutter", "Firebase"],
  },
  {
    title: "BookStore Website",
    image: project2,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Tailwind CSS", "React", "Node.js", "MongoDB"],
  },

  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Tailwind CSS", "React", "Node.js"],
  },
  {
    title: "Food Delivery App",
    image: project4,
    description:
      "A food delivery app made with Flutter x Firebase pre-built, functional and ready to go out of the box. This app has email authentication and backend already built in. The user can create an account, browse the menu, add to cart, and input card payment details.",
    technologies: ["Flutter", "Firebase"],
  },
];

export const CONTACT = {
  address: "Kandy, Sri Lanka",
  phoneNo: "+94 33 53 306 ",
  email: "nimashbhagya@gmail.com",
};

import React from "react";
import { Project, Skill, Experience } from "./types";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import ecommerceImg from "./assets/project/ecommerce.png";
import prompt from "./assets/project/prompt.png";
import api from "./assets/project/Api.png";
import gemeni from "./assets/project/gemini.png";

export const HERO_CONTENT = {
  greeting: "Hello, I'm",
  name: "Muneeb Siddiqui",
  title: "Developer & Trainer",
  subtitle:
    "Specializing in React, TypeScript, and Generative AI Integrations.",
};

export const ABOUT_CONTENT = `
Hello! I am Muhammad Muneeb ul Raza. I am a passionate 21 year old undergraduate of Computer Science at Government College University, Hyderabad. Technology has always been my favorite subject, and I also love doing web development, android app development and educational tutoring. In the field of web and mobile development, I combine my creativity with technical skills. I am obsessed with brainstorming and coming up with new ideas that could improve user experience and provide a solution to problems. Other than technical in nature, I love education and work as a home tutor to promote education within my community. As of now, I am focused towards learning something new along with the education which I am currently having and would always be looking forward towards any other skill that helps me contribute in the field of technology
`;

export const SKILLS: Skill[] = [
  { name: "React", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "Gemini API", level: 88, category: "AI" },
  { name: "Docker", level: 75, category: "Tools" },
  { name: "Java", level: 80, category: "Backend" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A functional shopping site UI using REACT.JS",
    tags: ["React", "D3", "WebSockets"],
    imageUrl: ecommerceImg,
    link: "https://e-shop-eight-dun.vercel.app/",
  },
  {
    id: 2,
    title: "Gemini Chatbot",
    description:
      "An intelligent customer support agent powered by Google Gemini 2.5 Flash.",
    tags: ["Gemini API", "TypeScript", "Node.js"],
    imageUrl: prompt,
    link: "https://github.com/MR-MoonDev/Gemini",
  },
  {
    id: 3,
    title: "practice react api concept and methods",
    description:
      "practice react api concept and methods",
    tags: ["Next.js", "Stripe", "Tailwind"],
    imageUrl: api,
    link: "https://github.com/MR-MoonDev/React-API-Practice",
  },
  {
    id: 4,
    title: "InfoGenius Vision",
    description:
      "InfoGenius Vision",
    tags: ["WebGL", "TensorFlow.js", "React"],
    imageUrl: gemeni,
    link: "#",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "CodeAplha",
    period: "May-2025 - May-2025",
    description:
      "one month internship experience at CodeAlpha as a Frontend Developer where I contributed to building responsive web applications using React and TypeScript. Collaborated with designers and backend developers to enhance user experience and implement new features.",
  },
  {
    id: 2,
    role: "Teacher and Trainer",
    company: "Brain-Scoop IT Academy",
    period: "2025 - Present",
    description:
      "Conducting training sessions on web development technologies including HTML, CSS, JavaScript, and React. Helping students build projects and improve their coding skills through hands-on learning and mentorship.",
  },
  {
    id: 3,
    role: "Teacher and Trainer",
    company: "Skil Zone IT Academy",
    period: "2025 - Present",
    description:
      "Conducting training sessions on web development technologies including HTML, CSS, JavaScript, and React. Helping students build projects and improve their coding skills through hands-on learning and mentorship.",
  },
];

export const SOCIAL_LINKS = [
  { platform: "GitHub", url: "https://github.com/", icon: <Github size={20} /> },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/muneebraza-dev/",
    icon: <Linkedin size={20} />,
  },
 
  {
    platform: "Email",
    url: "muhammadmuneebulraza@gmail.com",
    icon: <Mail size={20} />,
  },
];

import Project1 from "../assets/images/thumbnail-project-1-large.webp";
import Project2 from "../assets/images/thumbnail-project-2-large.webp";
import Project3 from "../assets/images/thumbnail-project-3-large.webp";
import Project4 from "../assets/images/thumbnail-project-4-large.webp";
import Project5 from "../assets/images/thumbnail-project-5-large.webp";
import Project6 from "../assets/images/thumbnail-project-6-large.webp";

export const experienceData = [
  {
    id: 1,
    title: "HTML",
    description: "4 Years Experience",
  },
  {
    id: 2,
    title: "CSS",
    description: "4 Years Experience",
  },
  {
    id: 3,
    title: "Javascript",
    description: "4 Years Experience",
  },
  {
    id: 4,
    title: "Accessibility",
    description: "4 Years Experience",
  },
  {
    id: 5,
    title: "React",
    description: "3 Years Experience",
  },
  {
    id: 6,
    title: "Sass",
    description: "3 Years Experience",
  },
];

export const projectsData = [
  {
    id: "a1",
    title: "DESIGN PORTFOLIO",
    img: Project1,
    tools: [
      {
        id: "b1",
        name: "HTML",
      },
      {
        id: "b2",
        name: "CSS",
      },
    ],
  },
  {
    id: "a2",
    title: "E-LEARNING LANDING PAGE",
    img: Project2,
    tools: [
      {
        id: "b3",
        name: "HTML",
      },
      {
        id: "b4",
        name: "CSS",
      },
    ],
  },
  {
    id: "a3",
    title: "TODO WEB APP",
    img: Project3,
    tools: [
      {
        id: "b5",
        name: "HTML",
      },
      {
        id: "b6",
        name: "CSS",
      },
      {
        id: "b7",
        name: "JAVASCRIPT",
      },
    ],
  },
  {
    id: "a4",
    title: "ENTERTAINMENT WEB APP",
    img: Project4,
    tools: [
      {
        id: "b8",
        name: "HTML",
      },
      {
        id: "b9",
        name: "CSS",
      },
      {
        id: "b10",
        name: "JAVASCRIPT",
      },
    ],
  },
  {
    id: "a5",
    title: "MEMORY GAME",
    img: Project5,
    tools: [
      {
        id: "b11",
        name: "HTML",
      },
      {
        id: "b12",
        name: "CSS",
      },
      {
        id: "b13",
        name: "JAVASCRIPT",
      },
    ],
  },
  {
    id: "a6",
    title: "ART GALLERY SHOWCASE",
    img: Project6,
    tools: [
      {
        id: "b14",
        name: "HTML",
      },
      {
        id: "b15",
        name: "CSS",
      },
      {
        id: "b16",
        name: "JAVASCRIPT",
      },
    ],
  },
];

type Tool = {
  id: string;
  name: string;
};

export interface projectType {
  id: string;
  title: string;
  img: string;
  tools: Tool[];
}

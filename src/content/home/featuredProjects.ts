import siladhida1 from "@/assets/images/featured-projects/siladhida/1.png";
import siladhida2 from "@/assets/images/featured-projects/siladhida/2.png";
import siladhida3 from "@/assets/images/featured-projects/siladhida/3.png";
import siladhida4 from "@/assets/images/featured-projects/siladhida/4.png";

import taskmap1 from "@/assets/images/featured-projects/taskmap/1.png";
import taskmap2 from "@/assets/images/featured-projects/taskmap/2.png";
import taskmap3 from "@/assets/images/featured-projects/taskmap/3.png";
import taskmap4 from "@/assets/images/featured-projects/taskmap/4.png";

import kgPlatform1 from "@/assets/images/featured-projects/kg-platform/1.png";
import kgPlatform2 from "@/assets/images/featured-projects/kg-platform/2.png";
import kgPlatform3 from "@/assets/images/featured-projects/kg-platform/3.png";
import kgPlatform4 from "@/assets/images/featured-projects/kg-platform/4.png";

import taskManagement1 from "@/assets/images/featured-projects/task-management/1.png";
import taskManagement2 from "@/assets/images/featured-projects/task-management/2.png";
import taskManagement3 from "@/assets/images/featured-projects/task-management/3.png";
import taskManagement4 from "@/assets/images/featured-projects/task-management/4.png";

import terraSnack1 from "@/assets/images/featured-projects/terra-snack/1.png";
import terraSnack2 from "@/assets/images/featured-projects/terra-snack/2.png";
import terraSnack3 from "@/assets/images/featured-projects/terra-snack/3.png";
import terraSnack4 from "@/assets/images/featured-projects/terra-snack/4.png";


import { ROUTES } from "@/routes/paths";

const siladhidaGallery = [
    siladhida1,
    siladhida2,
    siladhida3,
    siladhida4,
] as const;

const taskmapGallery = [
    taskmap1,
    taskmap2,
    taskmap3,
    taskmap4,
] as const;

const kgPlatformGallery = [
    kgPlatform1,
    kgPlatform2,
    kgPlatform3,
    kgPlatform4,
] as const;

const taskManagementGallery = [
    taskManagement1,
    taskManagement2,
    taskManagement3,
    taskManagement4,
] as const;

const terraSnackGallery = [
    terraSnack1,
    terraSnack2,
    terraSnack3,
    terraSnack4,
] as const;

export const featuredProjects = {
  kicker: "Here is My Work",
  title: "Check this out",
  description:
    "A selection of projects that represent my approach to software engineering, problem solving, and creative development.",
  projects: [
    {
      id: "siladhida",
      name: "SiLadhida",
      category: "Desktop POS System",
      description:
        "A desktop point-of-sale application designed for small businesses, focusing on structured workflows, maintainable architecture, and practical business operations.",
      technologies: ["C#", ".NET", "Avalonia UI", "MySQL"],
      status: "Completed",
      featured: true,
      href: ROUTES.projectDetail("siladhida"),
      gallery: siladhidaGallery,
    },
    {
      id: "taskmap",
      name: "TaskMap",
      category: "Mobile Application",
      description:
        "A location-based task management application that combines task organization, calendar planning, and map-based interaction.",
      technologies: ["Flutter", "Dart", "SQLite", "OpenStreetMap"],
      status: "In Development",
      featured: true,
      href: ROUTES.projectDetail("taskmap"),
      gallery: taskmapGallery,
    },
    {
      id: "huruf",
      name: "Huruf",
      category: "Game",
      description:
        "A game project exploring interactive systems, gameplay mechanics, visual identity, and creative world building.",
      technologies: ["GameMaker Studio", "GML", "Aseprite"],
      status: "In Development",
      featured: true,
      href: ROUTES.projectDetail("huruf"),
      gallery: kgPlatformGallery,
    },
    {
      id: "kambing-gunung-platform",
      name: "Kambing Gunung Platform",
      category: "Web Platform",
      description:
        "A personal developer platform built to bring together software engineering, creative design, projects, and the developer journey.",
      technologies: ["React", "TypeScript", "Vite"],
      status: "In Development",
      featured: true,
      href: ROUTES.projectDetail("kambing-gunung-platform"),
      gallery: taskManagementGallery,
    },
    {
      id: "kambing-gunung",
      name: "Kambing Gunung",
      category: "Web Platform",
      description:
        "A personal developer platform built to bring together software engineering, creative design, projects, and the developer journey.",
      technologies: ["React", "TypeScript", "Vite"],
      status: "In Development",
      featured: true,
      href: ROUTES.projectDetail("kambing-gunung-platform"),
      gallery: terraSnackGallery,
    },
  ],
  cta: {
    label: "View All Projects",
    href: ROUTES.projects,
  },
} as const;

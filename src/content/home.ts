import huruf1 from "@/assets/images/featured-projects/huruf-1.png";
import huruf2 from "@/assets/images/featured-projects/huruf-2.png";
import huruf3 from "@/assets/images/featured-projects/huruf-3.png";
import huruf4 from "@/assets/images/featured-projects/huruf-4.png";
import huruf5 from "@/assets/images/featured-projects/huruf-5.png";

import project1_1 from "@/assets/images/featured-projects/project-1/project-1_1.png";
import project1_2 from "@/assets/images/featured-projects/project-1/project-1_2.png";
import project1_3 from "@/assets/images/featured-projects/project-1/project-1_3.png";
import project1_4 from "@/assets/images/featured-projects/project-1/project-1_4.png";

import icon from "@/assets/images/contact/fire.png";

export const home = {
  hero: {
    intro: {
      greeting: "Welcome to",

      tagline:
        "Pixel × Anime × Game × Software Engineering",

      description:
        "A developer platform where software engineering, creative design, and game development come together through meaningful products.",

      scrollIndicator: "Scroll to Explore",
    },

    content: {
      kicker1: "Who",
      kicker2: "Behind This?",

      greeting: "Hi, I'm",

      professionalTitle:
        "Software Engineer",

      description:
        "I build software with clean architecture, thoughtful design, and a passion for creating meaningful digital experiences. Specialized in Mobile, Backend, and Game Development.",

      tag:
        "~Kambing Gunung"
    },
  },

  about: {
    kicker1: "Wanna",
    kicker2: "Know Me More?",

    greeting: "Hey! I'm",

    professionalTitle:
      "Software Engineer • Mobile • Backend • Aspiring Game Developer",

    description: [
      "I'm currently studying Software Engineering, where I spend most of my time learning, experimenting, and turning small ideas into real projects. I enjoy building mobile apps, backend systems, and slowly exploring the world of game development.",

      "Outside coding, I'm the kind of person who enjoys pixel art, anime, photography, and hiking. Sometimes a random thought becomes a side project, sometimes it stays as a sketch in my notebook—but every idea teaches me something new. For me, building software isn't just about writing code, it's about creating something that people can genuinely enjoy and remember.",
    ],


    philosophy:
      "I believe every great thing starts with one simple idea.",

    cta: {
      title: "This is just the beginning.",
      portfolio: "Portfolio Resume",
      ats: "ATS Resume",
    },
  },

  skills: {
    stats: {
      str: {
        name: "Strength",
        short: "STR",
        description:
          "The ability to face challenges, pressure, bugs, errors, and failures.",
        value: 78,
      },

      agi: {
        name: "Agility",
        short: "AGI",
        description:
          "The ability to adapt, communicate, work efficiently, and keep up with deadlines.",
        value: 72,
      },

      dex: {
        name: "Dexterity",
        short: "DEX",
        description:
          "The ability to identify problems accurately and find the right solution.",
        value: 80,
      },

      int: {
        name: "Intelligence",
        short: "INT",
        description:
          "Knowledge, reasoning, learning ability, and understanding of theory and practice.",
        value: 85,
      },

      luk: {
        name: "Luck",
        short: "LUK",
        description:
          "Unexpected ideas, spontaneous solutions, and random discoveries along the journey.",
        value: 69,
      },
    },

    playerSkills: {
      mobile: {
        name: "Mobile Development",

        description:
          "Application development focused on mobile platforms, including cross-platform applications, device capabilities, local data, and mobile user experiences.",

        jobs: [
          {
            name: "Mobile Developer",
            description:
              "A software developer specializing in applications designed for mobile devices and platforms.",
          },
          {
            name: "Cross-Platform App Developer",
            description:
              "A developer focused on creating applications that can run across multiple platforms from a shared codebase.",
          },
        ],

        techItems: [
          "Flutter",
          "Dart",
          "SQLite",
          "REST API",
          "Android SDK",
          "Flutter Map",
          "latlong2",
        ],
      },

      web: {
        name: "Web Development",

        description:
          "Software development for the web, covering user interfaces, client-side applications, server-side functionality, and the technologies that connect them.",

        jobs: [
          {
            name: "Frontend Developer",
            description:
              "A developer focused on the user-facing side of web applications, including interfaces, interactions, and client-side functionality.",
          },
          {
            name: "Full Stack Developer",
            description:
              "A developer capable of working across both the frontend and backend layers of an application.",
          },
          {
            name: "Web Developer",
            description:
              "A general web development role covering the creation and maintenance of websites and web applications.",
          },
        ],

        techItems: [
          "React",
          "TypeScript",
          "HTML",
          "CSS",
          "React Router",
          "Vite",
          "REST API",
          "ESLint",
          "Node.js",
          "Express.js",
          "Next.js",
          "Bulma CSS",
        ],
      },

      desktop: {
        name: "Desktop Development",

        description:
          "Software development for desktop environments, including application interfaces, local processing, data management, and system integration.",

        jobs: [
          {
            name: "Desktop Developer",
            description:
              "A developer specializing in software applications designed to run on desktop operating systems.",
          },
          {
            name: "Desktop Application Developer",
            description:
              "A developer focused on creating feature-rich desktop applications with interfaces, application logic, and data management.",
          },
        ],

        techItems: [
          "C#",
          ".NET",
          "Avalonia UI",
          "Entity Framework Core",
          "MySQL",
          "MVVM",
        ],
      },

      backend: {
        name: "Backend Development",

        description:
          "The server-side layer of software applications, covering APIs, business logic, authentication, data processing, and communication with databases and other services.",

        jobs: [
          {
            name: "Backend Developer",
            description:
              "A developer specializing in server-side logic, application services, APIs, and data processing.",
          },
          {
            name: "API Developer",
            description:
              "A developer focused on designing and implementing interfaces that allow applications and services to communicate with each other.",
          },
          {
            name: "Full Stack Developer",
            description:
              "A developer who works across both client-facing applications and server-side systems.",
          },
        ],

        techItems: [
          "C#",
          "ASP.NET Core",
          "Entity Framework Core",
          "MySQL",
          "REST API",
          "JWT",
          "Swagger / OpenAPI",
        ],
      },

      game: {
        name: "Game Development",

        description:
          "The development of interactive experiences through programming, gameplay systems, mechanics, visual assets, and world design.",

        jobs: [
          {
            name: "Game Developer",
            description:
              "A broad game development role involving programming, systems, mechanics, and other aspects of creating interactive games.",
          },
          {
            name: "Game Programmer",
            description:
              "A programming-focused role responsible for implementing gameplay systems, mechanics, interactions, and game logic.",
          },
        ],

        techItems: [
          "GameMaker Studio",
          "GML",
          "Unity",
          "Aseprite",
        ],
      },
    },

    coreCompetencies: [
      {
        name: "Web Full Stack Developer",

        description:
          "A development role that combines frontend and backend capabilities to work across the different layers of a web application.",

        attributes: [
          "Web",
          "Backend",
          "UI",
          "Client",
        ],
      },

      {
        name: "Backend Developer",

        description:
          "A development role focused on server-side systems, APIs, application logic, and data management.",

        attributes: [
          "API",
          "Systems",
          "Database",
        ],
      },

      {
        name: "Mobile Full Stack Developer",

        description:
          "A development role that combines mobile application development with backend services and APIs.",

        attributes: [
          "Mobile",
          "Backend",
          "Cross-Platform",
        ],
      },
    ],
  },

  featuredProjects: {
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

        technologies: [
          "C#",
          ".NET",
          "Avalonia UI",
          "MySQL",
        ],

        status: "Completed",

        featured: true,

        href: "/projects/siladhida",

        gallery: [
          project1_1,
          project1_2,
          project1_3,
          project1_4,
        ],
      },

      {
        id: "taskmap",
        name: "TaskMap",
        category: "Mobile Application",
        description:
          "A location-based task management application that combines task organization, calendar planning, and map-based interaction.",

        technologies: [
          "Flutter",
          "Dart",
          "SQLite",
          "OpenStreetMap",
        ],

        status: "In Development",

        featured: true,

        href: "/projects/taskmap",

        gallery: [
          huruf4,
          huruf5,
          huruf1,
          huruf2,
          huruf3,
        ],
      },

      {
        id: "huruf",
        name: "Huruf",
        category: "Game",
        description:
          "A game project exploring interactive systems, gameplay mechanics, visual identity, and creative world building.",

        technologies: [
          "GameMaker Studio",
          "GML",
          "Aseprite",
        ],

        status: "In Development",

        featured: true,

        href: "/projects/huruf",

        gallery: [
          huruf1,
          huruf2,
          huruf3,
          huruf4,
          huruf5,
        ],
      },

      {
        id: "kambing-gunung-platform",
        name: "Kambing Gunung Platform",
        category: "Web Platform",
        description:
          "A personal developer platform built to bring together software engineering, creative design, projects, and the developer journey.",

        technologies: [
          "React",
          "TypeScript",
          "Vite",
        ],

        status: "In Development",

        featured: true,

        href: "/projects/kambing-gunung-platform",

        gallery: [
          huruf2,
          huruf3,
          huruf4,
          huruf5,
          huruf1,
        ],
      },

      {
        id: "kambing-gunung",
        name: "Kambing Gunung",
        category: "Web Platform",
        description:
          "A personal developer platform built to bring together software engineering, creative design, projects, and the developer journey.",

        technologies: [
          "React",
          "TypeScript",
          "Vite",
        ],

        status: "In Development",

        featured: true,

        href: "/projects/kambing-gunung-platform",

        gallery: [
          huruf3,
          huruf4,
          huruf5,
          huruf1,
          huruf2,
        ],
      },
    ],

    cta: {
      label: "View All Projects",
      href: "/projects",
    },
  },

  journey: {
    kicker: "Once upon a time",

    title: "The first spark was ignited",

    milestones: [
      {
        id: "origin",
        title: "Origin",
        period: "Class 2 SMP",
        description:
          "It started with Minecraft. Redstone was the first place where curiosity and building came together.",
      },
      {
        id: "redstone-builder",
        title: "Redstone Builder",
        period: "Minecraft",
        description:
          "Doors, farms, hidden rooms, stairs, lifts—building mechanisms taught me to think through logic and cause and effect.",
      },
      {
        id: "the-beginning",
        title: "The Beginning",
        period: "Class 1 SMA · COVID",
        description:
          "I started wondering: instead of only playing games, what if I could create one that other people could play?",
      },
      {
        id: "first-discovery",
        title: "First Discovery",
        period: "Class 2 SMA",
        description:
          "C++ became my first step into programming. Small console programs slowly showed me what code could make possible.",
      },
      {
        id: "the-chosen-path",
        title: "The Chosen Path",
        period: "University",
        description:
          "After considering different paths, I chose Software Engineering as the foundation for the road ahead.",
      },
      {
        id: "going-deeper",
        title: "Going Deeper",
        period: "Software Engineering",
        description:
          "I began looking beyond code—learning about software processes, documentation, SDLC, and how software is built as a whole.",
      },
      {
        id: "here",
        title: "Here",
        period: "Present",
        description:
          "Today, I am still deepening my software engineering foundation while continuing to explore game development.",
      },
    ],
  },

  contact: {
    title: "Let's Connect",

    description:
      "Let's build something great together.",

    contacts: [
      {
        id: "email",
        icon: icon,
        label: "Email",
        value: "Let's talk via email",
        href: "mailto:davidntb7000@gmail.com",
      },
      {
        id: "github",
        icon: icon,
        label: "GitHub",
        value: "Check out my repositories",
        href: "https://github.com/Kambing-Gunung",
      },
      {
        id: "linkedin",
        icon: icon,
        label: "LinkedIn",
        value: "Connect and let's grow together",
        href: "https://linkedin.com/in/davidntb",
      },
    ],

    closing:
      "Thanks for being here. Let's rest for now, the journey continues ...",
  },
};
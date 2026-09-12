export const stats = {
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
} as const;

export const playerSkills = {
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
    techItems: ["GameMaker Studio", "GML", "Unity", "Aseprite"],
  },
} as const;

export const coreCompetencies = [
  {
    name: "Web Full Stack Developer",
    description:
      "A development role that combines frontend and backend capabilities to work across the different layers of a web application.",
    attributes: ["Web", "Backend", "UI", "Client"],
  },
  {
    name: "Backend Developer",
    description:
      "A development role focused on server-side systems, APIs, application logic, and data management.",
    attributes: ["API", "Systems", "Database"],
  },
  {
    name: "Mobile Full Stack Developer",
    description:
      "A development role that combines mobile application development with backend services and APIs.",
    attributes: ["Mobile", "Backend", "Cross-Platform"],
  },
] as const;

export const skills = {
  stats,
  playerSkills,
  coreCompetencies,
} as const;

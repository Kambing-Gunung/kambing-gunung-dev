import brandLogo from "@/assets/logos/kambing-gunung.png";

import { ROUTES } from "@/routes/paths";

export const common = {
  developer: {
    fullName: "David Wahyu Herdyansyah",
    nickname: "David",
  },

  brand: {
    name: "Kambing Gunung",
    logo: brandLogo,
    href: ROUTES.home,
  },

  navigation: {
    primary: [
      {
        label: "Home",
        to: ROUTES.home,
      },
      {
        label: "Projects",
        to: ROUTES.projects,
      },
      {
        label: "Journey",
        to: ROUTES.journey,
      },
      {
        label: "Documentation",
        to: ROUTES.documentation,
      },
      {
        label: "Contact",
        to: ROUTES.contact,
      },
    ],
  },

  techInventory: {
      languages: [
        "C++",
        "C#",
        "Java",
        "JavaScript",
        "TypeScript",
        "Dart",
        "PHP",
        "GML",
        "SQL",
      ],

      frameworksAndPlatforms: [
        ".NET",
        "ASP.NET Core",
        "Flutter",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "Laravel",
        "Avalonia UI",
        "JavaFX",
        "Java Swing",
        "Unity",
        "GameMaker Studio",
        "Bulma CSS",
        "Tailwind CSS",
        "Bootstrap",
      ],

      librariesAndPackages: [
        "Entity Framework Core",
        "React Router",
        "Flutter Map",
        "latlong2",
        "AutoMapper",
        "Sequelize",
      ],

      databasesAndQuery: [
        "MySQL",
        "SQLite",
      ],

      apiAndIntegration: [
        "REST API",
        "Swagger / OpenAPI",
        "JWT",
      ],

      engineering: [
        "OOP",
        "Clean Architecture",
        "MVVM",
        "Repository Pattern",
        "Dependency Injection",
      ],

      gameAndCreative: [
        "Aseprite",
      ],

      design: [
        "Figma",
        "Canva",
      ],

      testing: [
        "Katalon Studio",
        "Apache JMeter",
        "PHPUnit",
        "Cypress",
      ],

      developmentTools: [
        "Git",
        "GitHub",
        "Visual Studio Code",
        "NetBeans",
        "Code::Blocks",
        "XAMPP",
        "Android SDK",
        "Vite",
        "ESLint",
        "Maven",
        "Tomcat",
        "SonarQube",
        "JDK",
      ],

      markupAndData: [
        "HTML",
        "CSS",
        "Markdown",
        "XML",
        "JSON",
        "XAML",
      ],
    },

    
};

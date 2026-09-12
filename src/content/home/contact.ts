import icon from "@/assets/images/contact/fire.png";

export const contact = {
  title: "Let's Connect",
  description: "Let's build something great together.",
  contacts: [
    {
      id: "email",
      icon,
      label: "Email",
      value: "Let's talk via email",
      href: "mailto:davidntb7000@gmail.com",
    },
    {
      id: "github",
      icon,
      label: "GitHub",
      value: "Check out my repositories",
      href: "https://github.com/Kambing-Gunung",
    },
    {
      id: "linkedin",
      icon,
      label: "LinkedIn",
      value: "Connect and let's grow together",
      href: "https://linkedin.com/in/davidntb",
    },
  ],
  closing: "Thanks for being here. Let's rest for now, the journey continues ...",
} as const;

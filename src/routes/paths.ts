export const ROUTES = {
  home: "/",
  projects: "/projects",
  journey: "/journey",
  resume: "/resume",
  documentation: "/documentation",
  contact: "/contact",
  projectDetail: (id: string) => `/projects/${id}`,
} as const;

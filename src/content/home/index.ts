import type { HomeContent } from "@/types/home";

export { hero } from "./hero";
export { about } from "./about";
export { skills } from "./skills";
export { featuredProjects } from "./featuredProjects";
export { journey } from "./journey";
export { contact } from "./contact";

import { hero } from "./hero";
import { about } from "./about";
import { skills } from "./skills";
import { featuredProjects } from "./featuredProjects";
import { journey } from "./journey";
import { contact } from "./contact";

export const home = {
  hero,
  about,
  skills,
  featuredProjects,
  journey,
  contact,
} satisfies HomeContent;

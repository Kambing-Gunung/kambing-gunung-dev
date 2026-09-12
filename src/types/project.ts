export type FeaturedProject = {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly status: string;
  readonly featured: boolean;
  readonly href: string;
  readonly gallery: readonly string[];
};
import type { FeaturedProject } from "./project";
import type { Journey } from "./journey";

export type HomeContactItem = {
  readonly id: string;
  readonly icon: string;
  readonly label: string;
  readonly value: string;
  readonly href: string;
};

export type HomeContent = {
  readonly hero: {
    readonly intro: {
      readonly greeting: string;
      readonly tagline: string;
      readonly description: string;
      readonly scrollIndicator: string;
    };
    readonly content: {
      readonly kicker1: string;
      readonly kicker2: string;
      readonly greeting: string;
      readonly professionalTitle: string;
      readonly description: string;
      readonly tag: string;
    };
  };
  readonly about: {
    readonly kicker1: string;
    readonly kicker2: string;
    readonly greeting: string;
    readonly professionalTitle: string;
    readonly description: readonly string[];
    readonly philosophy: string;
    readonly cta: {
      readonly title: string;
      readonly portfolio: string;
      readonly ats: string;
    };
  };
  readonly skills: {
    readonly stats: Record<string, {
      readonly name: string;
      readonly short: string;
      readonly description: string;
      readonly value: number;
    }>;
    readonly playerSkills: Record<string, {
      readonly name: string;
      readonly description: string;
      readonly jobs: ReadonlyArray<{ readonly name: string; readonly description: string }>;
      readonly techItems: readonly string[];
    }>;
    readonly coreCompetencies: ReadonlyArray<{
      readonly name: string;
      readonly description: string;
      readonly attributes: readonly string[];
    }>;
  };
  readonly featuredProjects: {
    readonly kicker: string;
    readonly title: string;
    readonly description: string;
    readonly projects: readonly FeaturedProject[];
    readonly cta: {
      readonly label: string;
      readonly href: string;
    };
  };
  readonly journey: {
    readonly kicker: string;
    readonly title: string;
    readonly milestones: readonly Journey[];
  };
  readonly contact: {
    readonly title: string;
    readonly description: string;
    readonly contacts: readonly HomeContactItem[];
    readonly closing: string;
  };
};

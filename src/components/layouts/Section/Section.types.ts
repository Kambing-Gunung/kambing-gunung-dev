import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type SectionSize = "sm" | "md" | "lg";
export type SectionVariant = "default" | "surface" | "transparent";

export interface SectionProps extends Readonly<HTMLAttributes<HTMLElement>> {
  size?: SectionSize;
  variant?: SectionVariant;
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}

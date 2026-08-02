import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type StackDirection = "vertical" | "horizontal";
export type StackGap = "sm" | "md" | "lg";
export type AlignItems = "stretch" | "start" | "center" | "end";
export type JustifyContent = "start" | "center" | "end" | "between";

export interface StackProps extends Readonly<HTMLAttributes<HTMLElement>> {
  direction?: StackDirection;
  gap?: StackGap;
  align?: AlignItems;
  justify?: JustifyContent;
  wrap?: boolean;
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}

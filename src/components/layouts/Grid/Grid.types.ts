import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type GridColumns = 1 | 2 | 3 | 4 | "auto";
export type GridGap = "sm" | "md" | "lg";

export interface GridProps extends Readonly<HTMLAttributes<HTMLElement>> {
  columns?: GridColumns;
  gap?: GridGap;
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}

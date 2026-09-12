import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ContainerProps extends Readonly<HTMLAttributes<HTMLElement>> {
  size?: ContainerSize;
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}

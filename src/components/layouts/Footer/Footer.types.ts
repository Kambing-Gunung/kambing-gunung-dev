import type { HTMLAttributes, ReactNode } from "react";

export interface FooterProps extends Readonly<HTMLAttributes<HTMLElement>> {
  className?: string;
  children?: ReactNode;
}

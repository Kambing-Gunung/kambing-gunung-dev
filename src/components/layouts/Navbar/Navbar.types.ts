import type { HTMLAttributes, ReactNode } from "react";

export interface NavbarProps extends Readonly<HTMLAttributes<HTMLElement>> {
  sticky?: boolean;
  className?: string;
  children?: ReactNode;
}

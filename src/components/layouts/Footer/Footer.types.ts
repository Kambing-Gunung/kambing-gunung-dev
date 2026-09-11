import type { HTMLAttributes } from "react";

export interface FooterProps
  extends Readonly<HTMLAttributes<HTMLElement>> {
  className?: string;
}
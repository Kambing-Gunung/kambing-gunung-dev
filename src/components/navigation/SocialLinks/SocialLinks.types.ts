import type { HTMLAttributes, ReactNode } from "react";

export type SocialVariant = "inline" | "vertical" | "icon";

export interface SocialLinksProps extends Readonly<HTMLAttributes<HTMLElement>> {
  variant?: SocialVariant;
  className?: string;
  children?: ReactNode;
}

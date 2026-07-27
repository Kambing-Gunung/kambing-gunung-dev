import type { HTMLAttributes, ReactNode } from "react";

type CardVariant = "default" | "elevated" | "outline" | "interactive";
type CardPadding = "sm" | "md" | "lg";

interface CardProps extends Readonly<HTMLAttributes<HTMLElement>> {
  variant?: CardVariant;
  padding?: CardPadding;
  children: ReactNode;
}

function Card(props: Readonly<CardProps>) {
  const { children, variant = "default", padding = "md", className = "", ...restProps } = props;
  const Component = variant === "interactive" ? "article" : "div";

  return (
    <Component
      className={[
        "card",
        variant === "elevated" ? "card-elevated" : "",
        variant === "outline" ? "card-outline" : "",
        variant === "interactive" ? "card-interactive" : "",
        padding === "sm" ? "card-padding-sm" : padding === "lg" ? "card-padding-lg" : "card-padding-md",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...restProps}
    >
      {children}
    </Component>
  );
}

export default Card;

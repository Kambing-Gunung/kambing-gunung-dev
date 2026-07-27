import type { HTMLAttributes, ReactNode } from "react";

type BadgeVariant = "primary" | "secondary" | "success" | "warning" | "danger" | "info";
type BadgeSize = "sm" | "md";

interface BadgeProps extends Readonly<HTMLAttributes<HTMLSpanElement>> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  disabled?: boolean;
  children: ReactNode;
}

function Badge(props: Readonly<BadgeProps>) {
  const { children, variant = "primary", size = "sm", disabled = false, className = "", ...restProps } = props;

  return (
    <span
      className={[
        "badge",
        `badge-${variant}`,
        size === "md" ? "badge-md" : "badge-sm",
        disabled ? "badge-disabled" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...restProps}
    >
      {children}
    </span>
  );
}

export default Badge;

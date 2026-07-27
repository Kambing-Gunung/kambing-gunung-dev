import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Readonly<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

function Button(props: Readonly<ButtonProps>) {
  const {
    children,
    variant = "primary",
    size = "md",
    loading = false,
    fullWidth = false,
    disabled = false,
    type = "button",
    className = "",
    ...restProps
  } = props;
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={[
        "btn",
        `btn-${variant}`,
        `btn-${size}`,
        fullWidth ? "btn-full" : "",
        loading ? "btn-loading" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...restProps}
    >
      {loading ? <span aria-hidden="true">↻</span> : null}
      <span>{children}</span>
    </button>
  );
}

export default Button;

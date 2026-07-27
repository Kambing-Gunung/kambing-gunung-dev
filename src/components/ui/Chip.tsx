import type { HTMLAttributes, ReactNode } from "react";

type ChipVariant = "filled" | "outline" | "ghost";
type ChipSize = "sm" | "md";

interface ChipProps extends Readonly<HTMLAttributes<HTMLElement>> {
  variant?: ChipVariant;
  size?: ChipSize;
  selected?: boolean;
  disabled?: boolean;
  children: ReactNode;
}

function Chip(props: Readonly<ChipProps>) {
  const { children, variant = "filled", size = "md", selected = false, disabled = false, className = "", ...restProps } = props;
  let variantClass = "chip-filled";

  if (variant === "outline") {
    variantClass = "chip-outline";
  } else if (variant === "ghost") {
    variantClass = "chip-ghost";
  }

  if (disabled) {
    return (
      <span
        aria-disabled
        className={[
          "chip",
          "chip-disabled",
          variantClass,
          size === "sm" ? "chip-sm" : "chip-md",
          selected ? "chip-selected" : "",
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

  return (
    <button
      type="button"
      aria-pressed={selected || undefined}
      className={[
        "chip",
        variantClass,
        size === "sm" ? "chip-sm" : "chip-md",
        selected ? "chip-selected" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Chip;

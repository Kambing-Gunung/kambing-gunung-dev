import type { HTMLAttributes } from "react";

type DividerVariant = "default" | "strong" | "dashed";
type DividerOrientation = "horizontal" | "vertical";

interface DividerProps extends Readonly<HTMLAttributes<HTMLElement>> {
  variant?: DividerVariant;
  orientation?: DividerOrientation;
}

function Divider(props: Readonly<DividerProps>) {
  const { variant = "default", orientation = "horizontal", className = "", ...restProps } = props;
  const isVertical = orientation === "vertical";

  return isVertical ? (
    <div
      role="separator"
      aria-orientation="vertical"
      className={[
        "divider",
        "divider-vertical",
        variant === "strong" ? "divider-strong" : "",
        variant === "dashed" ? "divider-dashed" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...restProps}
    />
  ) : (
    <hr
      role="separator"
      className={[
        "divider",
        variant === "strong" ? "divider-strong" : "",
        variant === "dashed" ? "divider-dashed" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...restProps}
    />
  );
}

export default Divider;

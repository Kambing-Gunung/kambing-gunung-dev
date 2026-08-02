import { createElement } from "react";

import styles from "./Stack.module.css";
import type { StackProps } from "./Stack.types";

function Stack(props: Readonly<StackProps>) {
  const {
    as: Component = "div",
    direction = "vertical",
    gap = "md",
    align = "stretch",
    justify = "start",
    wrap = false,
    className = "",
    children,
    ...restProps
  } = props;

  const stackClassName = [
    styles.stack,
    styles[`direction-${direction}`],
    styles[`gap-${gap}`],
    styles[`align-${align}`],
    styles[`justify-${justify}`],
    styles[`wrap-${String(wrap)}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return createElement(
    Component,
    {
      className: stackClassName,
      ...restProps,
    },
    children,
  );
}

export default Stack;

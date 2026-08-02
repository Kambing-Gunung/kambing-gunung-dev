import { createElement } from "react";

import styles from "./Container.module.css";
import type { ContainerProps } from "./Container.types";

function Container(props: Readonly<ContainerProps>) {
  const {
    as: Component = "div",
    size = "lg",
    className = "",
    children,
    ...restProps
  } = props;

  const containerClassName = [
    styles.container,
    styles[`size-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return createElement(
    Component,
    {
      className: containerClassName,
      ...restProps,
    },
    children,
  );
}

export default Container;

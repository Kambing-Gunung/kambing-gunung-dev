import { createElement } from "react";

import styles from "./Grid.module.css";
import type { GridProps } from "./Grid.types";

function Grid(props: Readonly<GridProps>) {
  const {
    as: Component = "div",
    columns = 1,
    gap = "md",
    className = "",
    children,
    ...restProps
  } = props;

  const gridClassName = [
    styles.grid,
    styles[`columns-${String(columns)}`],
    styles[`gap-${gap}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return createElement(
    Component,
    {
      className: gridClassName,
      ...restProps,
    },
    children,
  );
}

export default Grid;

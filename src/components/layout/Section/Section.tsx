import { createElement } from "react";

import styles from "./Section.module.css";
import type { SectionProps } from "./Section.types";

function Section(props: Readonly<SectionProps>) {
  const {
    as: Component = "section",
    size = "md",
    variant = "default",
    className = "",
    children,
    ...restProps
  } = props;

  const sectionClassName = [
    styles.section,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return createElement(
    Component,
    {
      className: sectionClassName,
      ...restProps,
    },
    children,
  );
}

export default Section;

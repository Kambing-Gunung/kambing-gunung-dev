import { createElement } from "react";

import styles from "./SocialLinks.module.css";
import type { SocialLinksProps } from "./SocialLinks.types";

function SocialLinks(props: Readonly<SocialLinksProps>) {
  const {
    variant = "inline",
    className = "",
    children,
    ...restProps
  } = props;

  const socialLinksClassName = [
    styles["social-links"],
    styles[`variant-${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return createElement(
    "div",
    {
      className: socialLinksClassName,
      ...restProps,
    },
    children,
  );
}

export default SocialLinks;

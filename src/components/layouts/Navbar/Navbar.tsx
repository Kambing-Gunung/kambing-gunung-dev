import { createElement } from "react";

import Container from "../Container";
import Stack from "../Stack";
import styles from "./Navbar.module.css";
import type { NavbarProps } from "./Navbar.types";

function Navbar(props: Readonly<NavbarProps>) {
  const { sticky = false, className = "", children, ...restProps } = props;

  const navbarClassName = [styles.navbar, sticky ? styles.sticky : "", className]
    .filter(Boolean)
    .join(" ");

  return createElement(
    "nav",
    {
      className: navbarClassName,
      ...restProps,
    },
    createElement(
      Container,
      {
        as: "div",
        size: "xl",
      },
      createElement(
        Stack,
        {
          direction: "horizontal",
          justify: "between",
          align: "center",
          gap: "md",
        },
        children,
      ),
    ),
  );
}

export default Navbar;

import { createElement } from "react";

import Container from "../Container";
import Section from "../Section";
import Stack from "../Stack";
import styles from "./Footer.module.css";
import type { FooterProps } from "./Footer.types";

function Footer(props: Readonly<FooterProps>) {
  const { className = "", children, ...restProps } = props;

  const footerClassName = [styles.footer, className].filter(Boolean).join(" ");

  return createElement(
    "footer",
    {
      className: footerClassName,
      ...restProps,
    },
    createElement(
      Section,
      {
        as: "div",
        size: "md",
        variant: "surface",
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
            direction: "vertical",
            gap: "md",
          },
          children,
        ),
      ),
    ),
  );
}

export default Footer;

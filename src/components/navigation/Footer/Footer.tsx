import { createElement } from "react";

import { Container, Section } from "../../layout";

import styles from "./Footer.module.css";
import type { FooterProps } from "./Footer.types";

function Footer(props: Readonly<FooterProps>) {
  const { className = "", ...restProps } = props;

  const footerClassName = [styles.footer, className]
    .filter(Boolean)
    .join(" ");

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
        variant: "default",
      },
      createElement(
        Container,
        {
          as: "div",
          size: "xl",
        },
        createElement(
          "div",
          {
            className: styles.content,
          },
          createElement(
            "p",
            {
              className: styles.message,
            },
            "Made with ☕, code, and curiosity.",
          ),
          createElement(
            "p",
            {
              className: styles.copyright,
            },
            "© 2026 Kambing-Gunung.dev",
          ),
        ),
      ),
    ),
  );
}

export default Footer;
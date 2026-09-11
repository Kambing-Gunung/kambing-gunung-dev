import type { CSSProperties } from "react";

import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import Divider from "@/components/ui/Divider";
import { home } from "@/content/home";

import contactMountain from "@/assets/images/contact/contactMountain.png";
import contactCampsite from "@/assets/images/contact/contactCampsite.png";
import contactForeground from "@/assets/images/contact/contactForeground.png";
import fire from "@/assets/images/contact/fire.png";

import styles from "./Contact.module.css";

function Contact() {
  const { contact } = home;

  return (
    <Section as="section" size="none" className={styles.contact}>
      <Container as="div" size="xl">
        {/* Environment */}
        <div className={styles.environment} aria-hidden="true">
          <img
            src={contactMountain}
            alt=""
            className={styles.mountainLayer}
          />

          <img
            src={contactCampsite}
            alt=""
            className={styles.campsiteLayer}
          />

          <img
            src={contactForeground}
            alt=""
            className={styles.foregroundLayer}
          />

          <div className={styles.overlay} />
        </div>


        {/* Content */}
        <div className={styles.content}>
          <header className={styles.header}>
            <h2 className={styles.title}>{contact.title}</h2>

            <p className={styles.description}>
              {contact.description}
            </p>
          </header>

          <div
            className={styles.contacts}
            style={
              {
                "--contact-count": contact.contacts.length,
              } as CSSProperties
            }
          >
            {contact.contacts.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={styles.contactCard}
                target={
                  item.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <img
                  src={item.icon}
                  alt=""
                  className={styles.contactIcon}
                />

                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>
                    {item.label}
                  </span>

                  <span className={styles.contactValue}>
                    {item.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className={styles.closing}>
            <p className={styles.closingText}>
              {contact.closing}
            </p>

            <div className={styles.closingDivider}>

              <Divider variant="default" className={styles.divider} />
              <img
                src={fire}
                alt=""
                className={styles.fire}
              />
              <Divider variant="default" className={styles.divider} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Contact;

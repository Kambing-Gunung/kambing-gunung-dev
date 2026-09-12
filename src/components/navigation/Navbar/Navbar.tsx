import { NavLink } from "react-router";

import { Container, Stack } from "../../layout";

import { common } from "@/content/common";

import styles from "./Navbar.module.css";

function Navbar() {
    const { brand, navigation } = common;

    return (
        <header className={styles.navbar}>
            <Container size="xl">
                <Stack
                    direction="horizontal"
                    justify="between"
                    align="center"
                    className={styles.content}
                >
                    <NavLink
                        to={brand.href}
                        className={styles.logo}
                    >
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            className={styles.logoImage}
                        />

                        <span>{brand.name}</span>
                    </NavLink>

                    <nav className={styles.navigation}>
                        {navigation.primary.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={styles.link}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </Stack>
            </Container>
        </header>
    );
}

export default Navbar;
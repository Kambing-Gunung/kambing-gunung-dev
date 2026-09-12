import { Container } from "@/components/layout";
import { common } from "@/content/common";
import { home } from "@/content/home";

import styles from "./HeroIntro.module.css";

function HeroIntro() {
    const { intro } = home.hero;
    const { brand } = common;

    return (
        <section className={styles.intro}>
            <div className={styles.heroBackground} />
            <div className={styles.overlay}>

                <Container size="xl">
                    <div className={styles.content}>
                        <p className={styles.kicker}>{intro.greeting}</p>
                        <h1 className={styles.title}>{brand.name}</h1>
                        <p className={styles.tagline}>{intro.tagline}</p>
                        <p className={styles.description}>{intro.description}</p>

                        <div className={styles.scrollIndicator}>
                            <p className={styles.scrollText}>{intro.scrollIndicator}</p>

                            <div className={styles.scrollArrow}>
                                <span>﹀</span>
                                <span>﹀</span>
                                <span>﹀</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default HeroIntro;
import { Section } from "@/components/layouts";

import HeroIntro from "./HeroIntro";
import HeroContent from "./HeroContent";

import styles from "./Hero.module.css";

function Hero() {
    return (
        <Section as="section" size="none" className={styles.hero}>
            <HeroIntro />
            <HeroContent />
        </Section>
    );
}

export default Hero;
import { Container, Section } from "@/components/layout";

import styles from "./Test.module.css";

function Test() {
    return (
        <Section as="section" size="none" className={styles.test}>
            <Container size="xl" className={styles.testContent}>
                <h1>Projects</h1>
            </Container>
        </Section>
    );
}

export default Test;
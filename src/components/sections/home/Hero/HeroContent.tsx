import { Container } from "@/components/layouts";
import { common } from "@/content/common";
import { home } from "@/content/home";

import styles from "./HeroContent.module.css";

import developerPlaceholder from "@/assets/images/ilust.png";
import Divider from "@/components/ui/Divider";

function HeroContent() {
    const { content } = home.hero;
    const { developer } = common;

    return (
        <section className={styles.contentScene}>
            <Container size="xl">

                <div className={styles.content}>
                    <div className={styles.information}>
                        <div className={styles.kickerContainer}>
                            <p className={styles.kicker1}>{content.kicker1}</p>
                            <p className={styles.kicker2}>{content.kicker2}</p>
                            <Divider className={styles.divider} variant="strong" />
                        </div>
                        <p className={styles.greeting}>{content.greeting}</p>
                        <h2 className={styles.title}>{developer.fullName}</h2>
                        <p className={styles.professionalTitle}>{content.professionalTitle}</p>
                        
                        <p className={styles.description}>{content.description}</p>
                        <p className={styles.tag}>{content.tag}</p>

                    </div>

                    <div className={styles.visual}>
                        <img src={developerPlaceholder} alt="HeroContent Illustration" className={styles.visualImage} />
                    </div>
                </div>

            </Container>

        </section>
    );
}

export default HeroContent;
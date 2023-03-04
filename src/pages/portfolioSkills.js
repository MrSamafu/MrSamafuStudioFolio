import { Container } from "@mui/system";
import Image from "next/image";
import * as React from "react";
import styles from "../styles/Part.module.css";

export default function PortfolioSkills() {
  return (
    <Container className={styles.main}>
      <Container className={styles.completePart}>
        <Container className={styles.skill}>
          <p className={styles.title}>Web</p>
          <p className={styles.text}>
            Création de site et d&apos;applications Web
          </p>
        </Container>
        <Container className={styles.skill}>
          <p className={styles.title}>BDD</p>
          <p className={styles.text}>
            Conception et création de base de donnée
          </p>
        </Container>
        <Container className={styles.skill}>
          <p className={styles.title}>Android</p>
          <p className={styles.text}>Développement d&apos;application mobile</p>
        </Container>
        <Container className={styles.skill}>
          <p className={styles.title}>Unity</p>
          <p className={styles.text}>Conception de jeux vidéo</p>
        </Container>
      </Container>
    </Container>
  );
}

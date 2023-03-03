import { Container } from "@mui/system";
import Image from "next/image";
import * as React from "react";
import styles from "../styles/Part.module.css";

export default function PortfolioSkills() {
  return (
    <Container className={styles.main}>
      <Container className={styles.completePart}>
        <Container className={styles.skill}>
          <p className={styles.title}>Titre</p>
          <p className={styles.text}>Description</p>
        </Container>
        <Container className={styles.skill}>
          <p className={styles.title}>Titre</p>
          <p className={styles.text}>Description</p>
        </Container>
        <Container className={styles.skill}>
          <p className={styles.title}>Titre</p>
          <p className={styles.text}>Description</p>
        </Container>
        <Container className={styles.skill}>
          <p className={styles.title}>Titre</p>
          <p className={styles.text}>Description</p>
        </Container>
      </Container>
    </Container>
  );
}

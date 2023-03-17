import { Container } from "@mui/system";
import Image from "next/image";
import * as React from "react";
import styles from "../styles/Part.module.css";

export default function PortfolioQuickView() {
  return (
    <Container className={styles.main}>
      <Container className={styles.home}>
        <Image
          src="/Moi 500x500.png"
          alt="It's me :D"
          width={150}
          height={150}
          style={{ borderRadius: "100%" }}
        />
        <p className={styles.bigTitle}>Samson Flamme</p>
        <p className={styles.text}> Un développeur freelance et bien plus...</p>
      </Container>
    </Container>
  );
}

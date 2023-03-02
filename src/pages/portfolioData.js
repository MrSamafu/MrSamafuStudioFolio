import { Container } from "@mui/system";
import Image from "next/image";
import * as React from "react";
import styles from "../styles/Part.module.css";

export default function PortfolioData() {
  return (
    <Container className={styles.main}>
      <Container className={styles.leftPart}>
        <Image src="/72.jpg" alt="It's me :D" width={100} height={100}></Image>
      </Container>
      <Container className={styles.rightPart}>
        <p className={styles.title}>Qui suis-je ?</p>
        <p className={styles.text}>
          Bonjour, je m&apos;appelle Samson Flamme je suis un developpeur
          informatique Full-stack basé dans l&apos;Eure (27) en Normandie. Je
          suis passionné par mon travail et mes compétences sont diverses. Avec
          mon Bac+3 ainsi que mes trois ans d&apos;experience dans le domaine,
          j&apos;ai travaillé avec différentes technologies comme le web, les
          bases de donnée ou encore les logiciels. Je me suis aussi beaucoup
          experimenter sur le développement de jeux video grace au logiciel
          Unity.
        </p>
        <Container className={styles.card}>
          <Container className={styles.cardList}>
            <p className={[styles.text, styles.textList].join(" ")}>
              <span className={styles.bold}>Name:</span> Samson FLAMME
            </p>
            <p className={[styles.text, styles.textList].join(" ")}>
              <span className={styles.bold}>Phone:</span> +33 6 31 26 76 89
            </p>
            <p className={[styles.text, styles.textList].join(" ")}>
              <span className={styles.bold}>Experience:</span> +3 ans
            </p>
            <p className={[styles.text, styles.textList].join(" ")}>
              <span className={styles.bold}>Discord:</span> MrSamafu#7686
            </p>
          </Container>
          <Container className={styles.cardList}>
            <p className={[styles.text, styles.textList].join(" ")}>
              <span className={styles.bold}>Age:</span> 27
            </p>
            <p className={[styles.text, styles.textList].join(" ")}>
              <span className={styles.bold}>Adresse:</span> La boissiere 27220,
              France
            </p>
            <p className={[styles.text, styles.textList].join(" ")}>
              <span className={styles.bold}>Freelance:</span> Disponible
            </p>
            <p className={[styles.text, styles.textList].join(" ")}>
              <span className={styles.bold}>Email:</span>{" "}
              samson.flamme.pro@outlook.com
            </p>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

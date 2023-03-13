import styles from "../styles/Part.module.css";
import * as React from "react";
import { Container } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  position,
  title,
  description,
  link,
  picture,
}) {
  return (
    <Link className={styles.main} href={link}>
      {position == "left" ? (
        <Container className={styles.leftPart}>
          <Image
            src={picture}
            alt={title}
            width={300}
            height={370}
            style={{
              border: "3px solid #fff",
              borderRadius: "5px",
              padding: "5px",
            }}
          ></Image>
        </Container>
      ) : (
        <Container className={styles.rightPart}>
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>{description}</p>
        </Container>
      )}
      {position == "left" ? (
        <Container className={styles.rightPart}>
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>{description}</p>
        </Container>
      ) : (
        <Container className={styles.leftPart}>
          <Image
            src={picture}
            alt={title}
            width={300}
            height={370}
            style={{
              border: "3px solid #fff",
              borderRadius: "5px",
              padding: "5px",
            }}
          ></Image>
        </Container>
      )}
    </Link>
  );
}

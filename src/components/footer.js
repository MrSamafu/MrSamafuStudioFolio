import * as React from "react";
import { Container } from "@mui/system";
import styles from "../styles/Footer.module.css";
import { Button, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material/styles";

export default function Footer() {
  return (
    <Container className={styles.main}>
      <Container className={styles.logo}>
        <p className={styles.titleHeader}>MrSamafuStudio</p>
      </Container>
      <Container className={styles.network}>
        <Link href="https://github.com/MrSamafu">
          <GitHubIcon
            sx={{
              color: "#1b2229",
              "&:hover": { color: "#b83c82", cursor: "pointer" },
            }}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/samson-flamme-3490b719a/">
          <LinkedInIcon
            sx={{
              color: "#1b2229",
              "&:hover": { color: "#b83c82", cursor: "pointer" },
            }}
          />
        </Link>
      </Container>
    </Container>
  );
}

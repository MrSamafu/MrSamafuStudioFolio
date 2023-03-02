import * as React from "react";
import { Container } from "@mui/system";
import styles from "../styles/Header.module.css";
import { Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(() => ({
  color: "#cccccc",
  fontFamily:
    'Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",sans-serif',
  "&:hover": {
    color: "#19e3b1",
    textDecoration: "underline",
  },
}));

export default function Header() {
  return (
    <Container className={styles.main}>
      <Container className={styles.logo}>
        <p className={styles.titleHeader}>MrSamafuStudio</p>
      </Container>
      <Container className={styles.menu}>
        <StyledButton variant="text">Présentation</StyledButton>
        <StyledButton variant="text">Projet</StyledButton>
        <StyledButton variant="text">Contact</StyledButton>
      </Container>
      <Container className={styles.network}>
        <FacebookIcon
          sx={{
            color: "#cccccc",
            "&:hover": { color: "#19e3b1", cursor: "pointer" },
          }}
        />
        <LinkedInIcon
          sx={{
            color: "#cccccc",
            "&:hover": { color: "#19e3b1", cursor: "pointer" },
          }}
        />
      </Container>
    </Container>
  );
}

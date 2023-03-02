import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import { Container } from "@mui/system";
import PortfolioData from "./portfolioData";
import PortfolioQuickView from "./portfolioQuickView";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.background}>
      <div className={styles.screenSize}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="MrSamafuStudio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Container className={styles.part}>
          <PortfolioQuickView />
          <PortfolioData />
        </Container>
      </div>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import { Container } from "@mui/system";
import PortfolioData from "./portfolioData";
import PortfolioQuickView from "./portfolioQuickView";
import PortfolioSkills from "./portfolioSkills";
import Footer from "@/components/footer";
import ProjectCard from "@/components/projectCard";

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
        <Container className={styles.part}>
          <Header />
          <PortfolioQuickView />
          <PortfolioData />
          <PortfolioSkills />
          <ProjectCard
            title="Perseverance"
            link="https://mrsamafu.itch.io/perseverance"
            position="left"
            description="Vous controlez un petit personnage qui ce retrouve coincé dans une faille temporel. Le but du jeu est des réparer toutes les machines de chaque salle le plus vite possible pour pouvoir vouséchapper de la faille. Mais attention ! La faille spatio-temporel vous fera changer de salle toute les 10 secondes, mefiez vous ! (Octobre 2022)"
            picture="/Perseverance.png"
            tag="Ludum Dare"
          />
          <ProjectCard
            title="Sad Boy"
            link="https://mrsamafu.itch.io/sad-boy"
            position="right"
            description="Ne vous laisser pas avoir par la folie, évitez les mauvaises ondes et retourné d'ou vous venez ! (Octobre 2021)"
            picture="/SadBoy.jpg"
            tag="Ludum Dare"
          />
          <ProjectCard
            title="Where is my nail ?"
            link="https://mrsamafu.itch.io/where-is-my-nail"
            position="left"
            description="A la recherche du clou perdu ! Aidez nôtre personnage a retrouver son clou qu'il a enfoncé beaucoup trop loin, attention la tâche est difficile. (Avril 2021)"
            picture="/WIMN.png"
            tag="Ludum Dare"
          />
          <ProjectCard
            title="Infinity Loop"
            link="https://mrsamafu.itch.io/infinity-loop"
            position="right"
            description="Coincé dans une grande pièce, vous devez trouver comment vous échapper. Le problème est que chaque porte mène à cette même pièce, a vous de trouver le moyen de sortir ! (Octobre 2020)"
            picture="/infinityLoop.png"
            tag="Ludum Dare"
          />
          <Footer />
        </Container>
      </div>
    </div>
  );
}

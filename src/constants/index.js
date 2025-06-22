import project1 from "../assets/projects/SITEKEPER.png";
import project2 from "../assets/projects/plantes.jpg";
import project5 from "../assets/projects/prj1.png";
import { link } from "motion/react-client";



export const EXPERIENCES = [
  {
    year: "Avril 2025 - Mai 2025",
    role: "STAGE",
    company: " VIAPRESTIGE-AGENCY",
    description: `Conception et développement d’un site web en utilisant Laravel pour le backend et React pour le frontend. Mise en place d’un système automatisé permettant le listing des domaines des clients d’une agence, avec un outil de diagnostic intégré pour vérifier l’état des sites (actifs ou inactifs), détecter les bugs et problèmes techniques, identifier les technologies utilisées (CMS, frameworks, etc.), surveiller l’expiration des certificats SSL et assurer le suivi des noms de domaine.`,
    technologies: ["Bootstrap", "React.js", "Laravel", "MySQL"],
  },
  {
    year: "FEVRIER 2022-MAI 2022",
    role: "STAGE",
    company: "SMART INFLUENCER",
    description: `J’ai conçu et déployé un site web dynamique avec WordPress, intégrant un système de réservation en ligne. Une interface d’administration a également été mise en place pour permettre la gestion des véhicules, des disponibilités et des clients de manière simple et efficace.`,
    technologies: ["HTML", "CSS", "Wordpress", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "Application web Siteeeper",
    image: project1,
    description:
      "Développement d’un site web avec Laravel et React, intégrant un système automatisé de gestion des domaines clients et un outil de diagnostic technique des sites web..",
    technologies: ["PHP", "Tailwind", "React.js", "MySQL",],
  },
  {
    title: "Application E-commerce Tudert",
    image: project2,
    description:
      "Conception et réalisation complète d’un site E-commerce moderne pour la vente des plantes et l’Outils de jardinage en ligne, avec une interface utilisateur responsive.",
    technologies: ["Bootstrap", "React.js", "Laravel", "MySQL"],

  },
  
  {
    title: "Portfolio Personnel",
    image: project5,
    description:
      "Création d’un site portfolio interactif mettant en valeur mes projets, compétences et informations de contact de manière professionnelle.",
    technologies: ["React.js", "Tailwind", "Framer Motion"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  phoneNo: "+212 710 981 439",
  email: "ouissalbenzahi@gmail.com",
};

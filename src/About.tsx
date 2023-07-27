import styles from "./About.module.css";
import { Card, ThemeProvider } from "@mui/material";
import React from "react";
import logo from "./lab_logo.png"; // Tell webpack this JS file uses this image

console.log(logo);
function About() {
  return (
    <Card className={styles.container}>
      <p>Welcome to our website!</p>
      <p>
        Our mission is to unravel the genetic factors behind the varying disease
        prevalences observed across different populations worldwide. We
        recognize that diseases impact populations differently, and our platform
        aims to shed light on the underlying genetic factors contributing to
        these differences. Understanding the genetic basis of disease prevalence
        is essential for developing targeted and personalized healthcare
        solutions.
        <p>
          We used Genome-Wide Association Studies (GWAS) to identify potential
          genes that may influence specific diseases. Our approach involves
          analyzing allele frequencies of variants within these genes. Using a
          unique formula developed by us, we pinpoint genes that exhibit
          significant changes in allele frequencies, shedding light on their
          potential role in disease prevalence across diverse populations.
        </p>
      </p>

      <img src={logo} alt="Logo" />
    </Card>
  );
}

export default About;

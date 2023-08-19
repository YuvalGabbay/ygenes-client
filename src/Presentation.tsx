import React from "react";
import styles from "./Presentation.module.css";
import { Header } from "./Header";

function About() {
  return (
    <>
      <Header />
      <div className={styles.presentationStyle}>
        <p>
          <b>My presentation about this project, Please wait for it to load.</b>
        </p>
        <iframe
          title="presentation"
          src="https://onedrive.live.com/embed?resid=D5E063A789B6D535%2110700&amp;authkey=%21AKmaWjmUFQGN7HY&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1"
          width="800px"
          height="500px"
          frameBorder="0"
        />
      </div>
    </>
  );
}

export default About;

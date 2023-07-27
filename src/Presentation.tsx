import React from "react";
import { inspect } from "util";
import styles from "./Presentation.module.css";

function About() {
  return (
    <div className={styles.presentationStyle}>
      <p>
        <b>My presentation about this project, Please wait for it to load.</b>
      </p>
      <iframe
        src="https://onedrive.live.com/embed?resid=D5E063A789B6D535%2110700&amp;authkey=%21AKmaWjmUFQGN7HY&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1"
        width="800px"
        height="500px"
        frameBorder="0"
      >
        זהו פריט מצגת מוטבע של{" "}
        <a target="_blank" href="https://office.com">
          Microsoft Office
        </a>
        , המופעל באמצעות{" "}
        <a target="_blank" href="https://office.com/webapps">
          Office
        </a>
        .
      </iframe>
    </div>
  );
}

export default About;

import React from "react";
import classes from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        Made with best regards by Lysenko Denys 2023
      </div>
      <div class="uiverse">
        <span class="tooltip">uiverse.io</span>
        <span>Tooltip</span>
      </div>
    </footer>
  );
};

export default MainFooter;

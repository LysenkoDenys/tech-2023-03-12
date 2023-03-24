import React from "react";
import classes from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        Made with best regards by Lysenko Denys 2023
      </div>
      <div className={classes.universe}>
        <span className={classes.tooltip}>+380506045095</span>
        <a href="mailto:lysenkoden@gmail.com">
          <span>Call the BATMAN</span>
        </a>
      </div>
    </footer>
  );
};

export default MainFooter;

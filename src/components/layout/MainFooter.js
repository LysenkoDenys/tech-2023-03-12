import React from "react";
import classes from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        Made with best regards by Lysenko Denys 2023
      </div>
      <div className={classes.universe}>
        <span className={classes.tooltip}>lysenkoden@gmail.com</span>
        <span>Call the BATMAN</span>
      </div>
    </footer>
  );
};

export default MainFooter;

import React from "react";
import classes from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        Made with best regards by Lysenko Denys | 2023
      </div>
      <div>
        <a href="https://linkedin.com/in/lysenko-denys" target="_blank">
          <img
            className={classes.social_media__icon}
            src="../../images/in.png"
            alt="in"
          />
        </a>
      </div>
      <div className={classes.btn}>
        <span className={classes.tooltip}>+380506045095</span>
        <a href="mailto:lysenkoden@gmail.com">
          <span>Call the BATMAN</span>
        </a>
      </div>
    </footer>
  );
};

export default MainFooter;

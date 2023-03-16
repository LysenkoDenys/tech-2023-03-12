import React from "react";
import classes from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <footer className={classes.header}>
      <div className={classes.logo}>
        Made with best regards by Lysenko Denys 2023
      </div>
      <button>Call the batman</button>
    </footer>
  );
};

export default MainFooter;

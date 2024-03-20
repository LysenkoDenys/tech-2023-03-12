import React from 'react';
import classes from './MainFooter.module.css';

const MainFooter = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        <p>
          <a
            href="https://www.linkedin.com/in/lysenko-denys/"
            target="_blank"
            rel="noreferrer"
          >
            Made with best regards
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/lysenko-denys/"
            target="_blank"
            rel="noreferrer"
          >{`by Lysenko Denys | 2023-${new Date().getFullYear()}`}</a>
        </p>
      </div>
      <div className={classes.btn}>
        <span className={classes.tooltip}>+380 506 045 095</span>
        <a href="mailto:lysenkoden@gmail.com">
          <span>Call the BATMAN</span>
        </a>
      </div>
    </footer>
  );
};

export default MainFooter;

import React from 'react';
import classes from './MainFooter.module.css';

const MainFooter = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>
        {`Made with best regards by Lysenko Denys | ${new Date().getFullYear()}`}
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

import React from "react";
import classes from "./MainNavigation.module.css";

const Burger = () => {
  return (
    <>
      <div className={classes.burger}>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
      </div>
      {/* <style jsx>{`
        .burger.active .bar:nth-child(2) {
          opacity: 0;
        }
        .burger.active .bar:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .burger.active .bar:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      `}</style> */}
    </>
  );
};

export default Burger;

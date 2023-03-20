import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const burger = document.querySelector(".burger");
  const navMenu = document.querySelector(".nav-menu");
  // burger.addEventListener("click", () => {
  //   burger.classList.toggle("active");
  //   navMenu.classList.toggle("active");
  // });
  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      burger.classList.remove("active");
    })
  );

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Tech Dept</Link>
      </div>
      <nav>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/graphics">Graphics</Link>
          </li>
          <li>
            <Link to="/carts">Carts</Link>
          </li>
          <li>
            <Link to="/others">Others</Link>
          </li>
        </ul>
        <div className={classes.burger}>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;

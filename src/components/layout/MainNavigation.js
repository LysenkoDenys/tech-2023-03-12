import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Technical Department</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/graphics">Graphics</Link>
          </li>
          <li>
            <Link to="/carts">Carts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

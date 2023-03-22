import { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  // ! WORK2========================================
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen(burgerOpen);
  };
  // ! WORK2========================================
  // ! WORK1========================================
  // const burger = document.querySelector(".burger");
  // const navMenu = document.querySelector(".nav-menu");
  // burger.addEventListener("click", () => {
  //   burger.classList.toggle("active");
  //   navMenu.classList.toggle("active");
  // });
  // document.querySelectorAll(".nav-link").forEach((n) =>
  //   n.addEventListener("click", () => {
  //     burger.classList.remove("active");
  //   })
  // );
  // ! WORK1========================================

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
        <div className={classes.burger} onClick={toggleBurger}>
          <Burger isOpen={burgerOpen} />
        </div>
        {/* // ! WORK1======================================== */}
        {/* <div className={classes.burger}>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
          <span className={classes.bar}></span>
        </div> */}
        {/* // ! WORK1======================================== */}
      </nav>
      {/* <style jsx>{`
        .header ul {
          display: ${burgerOpen ? "inline" : "none"};
          background-color: blue;
          height: 100hv;
          width: 50vw;
          margin-top: 50px;
          position: absolute;
        }
      `}</style> */}
    </header>
  );
};

export default MainNavigation;

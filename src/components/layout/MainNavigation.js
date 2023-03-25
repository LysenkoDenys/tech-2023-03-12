import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Tech Dept</Link>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/charts">Charts</Link>
          </li>
          <li>
            <Link to="/carts">Carts</Link>
          </li>
          <li>
            <Link to="/others">Others</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </nav>
      <style jsx="true">{`
        .navigation ul {
          display: flex;
          flex-wrap: wrap;
          float: right;
          margin: 0px;
          padding: 0px;
          overflow: hidden;
          top: -100%;
          gap: 0;
        }
        .navigation ul li {
          list-style-type: none;
          padding-right: 10px;
        }

        .hamburger {
          display: none;
          z-index: 6;
        }
        @media (max-width: 768px) {
          .hamburger {
            display: block;
            padding-top: 8px;
            margin-left: 10px;
            z-index: 6;
          }

          .navigation ul {
            display: ${hamburgerOpen ? "inline" : "none"};
            background-color: #fcce09;
            border-radius: 3px;
            padding-right: 20px;
            position: fixed;
            height: auto;
            width: auto;
            top: 90px;
            right: 6%;
            overflow: auto;
            box-shadow: 2px 2px 2px #333333;
          }
        }
        @media (max-width: 479px) {
          .navigation ul {
            right: 3%;
          }
        }
      `}</style>
    </header>
  );
};

export default MainNavigation;

import React from "react";
import headername from "./Header.module.css";
import nav__wrapper from "./Header.module.css";
import navigation from "./Header.module.css";
import Logo from "./Header.module.css";
import menu from "./Header.module.css";
import nav_right from "./Header.module.css";
import nav_buttons from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/#",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ];
  return (
    <>
      <div className={headername.headername}>
        <div>
          <div>
            <div className={nav__wrapper.nav__wrapper}>
              <div className={Logo.Logo}>
                <img src={logo} alt="" />
              </div>

              <div className={navigation.navigation}>
                <div className={menu.menu}>
                  <span style={{ marginRight: "40px" }}>
                    <Link to="/home">Home</Link>
                  </span>
                  <span style={{ marginRight: "40px" }}>
                    <Link to="#">About</Link>
                  </span>
                  <span>
                    <Link to="/tours">Tours</Link>
                  </span>
                </div>
              </div>

              <div className={nav_right.nav_right}>
                <div className={nav_buttons.nav_buttons}>
                  <button type="button" class="btn btn-secondary">
                    <Link to="/login">Login</Link>
                  </button>
                  <button type="button" class="btn btn-warning">
                    <Link to="/register">Register</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

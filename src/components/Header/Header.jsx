import React from "react";
import headername from "./Header.module.css";
import nav__wrapper from "./Header.module.css";
import navigation from "./Header.module.css";
import Logo from "./Header.module.css";
import menu from "./Header.module.css";
import menua from "./Header.module.css";
import nav_right from "./Header.module.css";
import nav_buttons from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import menuicon from "./Header.module.css";
import travelLogo from "./Header.module.css";
import aeroplane from "./Header.module.css";

const Header = () => {
 
  return (
    <>
      <div className={headername.headername}>
        <div>
          <div>
            <div className={nav__wrapper.nav__wrapper}>
              <div className={Logo.Logo}>
                <img className={travelLogo.travelLogo} src={logo} alt="" />
              </div>

              <div className={navigation.navigation}>
                <div className={menu.menu}>
                  <span className={menua.menua} style={{ marginRight: "40px" }}>
                    <Link to="/home">Home</Link>
                  </span>
                  <span className={menua.menua} style={{ marginRight: "40px" }}>
                    <Link to="#">About</Link>
                  </span>
                  <span className={menua.menua}>
                    <Link to="/tours">Tours</Link>
                  </span>
                </div>
              </div>
              <div className={aeroplane.aeroplane} ></div>   
              <div className={nav_right.nav_right}>
                <div className={nav_buttons.nav_buttons}>
                  <button style={{borderRadius:"20px"}} type="button" class="btn btn-secondary">
                    <Link to="/login">Login</Link>
                  </button>
                  <button  style={{borderRadius:"20px"}} type="button" class="btn btn-warning">
                    <Link to="/register">Register</Link>
                  </button>
                </div>

                <span className={menuicon.menuicon }>
                <RiBarChartHorizontalLine/>
                </span>
              </div>

          
          
        
            
  

            </div>
          </div>
   
        </div>
      
      </div>
    </>
  );
};

export default Header;

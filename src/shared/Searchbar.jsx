import React from "react";
import searchbar from "./Searchbar.module.css";
import searchbarmod from "./Searchbar.module.css";
import searchbarmod2 from "./Searchbar.module.css";
import searchbarmodh6 from "./Searchbar.module.css";
import searchbarmodspan from "./Searchbar.module.css";
import searchicon from "./Searchbar.module.css";
import { RiMapPinLine } from "react-icons/ri";
import { RiMapPinTimeFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { RiFindReplaceLine } from "react-icons/ri";

const Searchbar = () => {
  return (
    <>
      <div className={searchbar.searchbar}>
        <div className={searchbarmod.searchbarmod}>
          <div className={searchbarmod2.searchbarmod2}>
            <span className={searchbarmodspan.searchbarmodspan}>
              <RiMapPinLine />
            </span>
            <div>
              <h6 className={searchbarmodh6.searchbarmodh6}>Location</h6>

              <input
              style={{border:"none",fontSize:"0.9rem",outline:"none"}}
                type="text"
                className="form-control"
                placeholder="Where are you going?"
              />
            </div>
          </div>

          <div className={searchbarmod2.searchbarmod2}>
            <span className={searchbarmodspan.searchbarmodspan}>
              <RiMapPinTimeFill />
            </span>
            <div>
              <h6 className={searchbarmodh6.searchbarmodh6}>Distance</h6>
              <input
               style={{border:"none",fontSize:"0.9rem",outline:"none"}}
                type="number"
                className="form-control"
                placeholder="Distance K/m"
              />
            </div>
          </div>

          <div className={searchbarmod2.searchbarmod2}>
            <span className={searchbarmodspan.searchbarmodspan}>
              <RiTeamFill />
            </span>
            <div>
              <h6 className={searchbarmodh6.searchbarmodh6}>Maximum people</h6>
              <input  style={{border:"none",fontSize:"0.9rem",outline:"none"}} type="number" className="form-control" placeholder="0" />
            </div>
          </div>
          <span className={searchicon.searchicon} type='submit'>
          <RiFindReplaceLine/>
          </span>
        </div>
      </div>
    </>
  );
};

export default Searchbar;

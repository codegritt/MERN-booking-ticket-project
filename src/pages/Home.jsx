import React from "react";
import heroContent from "../pages/Home.module.css";
import herosubtitle from "../pages/Home.module.css";
import herosubtitleh1 from "../pages/Home.module.css";
import herosubtitlep from "../pages/Home.module.css";
import herosubtitlediv from "../pages/Home.module.css";
import herosubtitleimg from "../pages/Home.module.css";
import highlight from "../pages/Home.module.css";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.png";

const Home = () => {
  return (
    <>
      <div className={heroContent.heroContent}>
        <div className={herosubtitle.herosubtitle}>
          {/* <Subtitle subtitle={"Know before you go"} /> */}
          <div className={herosubtitlediv.herosubtitlediv}>
            <h1 className={herosubtitleh1.herosubtitleh1}>
              Traveling opens the door for creating
              <span className={highlight.highlight}>memories</span>
            </h1>
            <p className={herosubtitlep.herosubtitlep}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque dignissimos et repudiandae libero. Nulla voluptatem
              repudiandae natus dolores? Provident ea totam molestias eos
              doloribus dolor atque obcaecati aliquam nam assumenda.
            </p>
          </div>
          <div>
            <img
              className={herosubtitleimg.herosubtitleimg}
              src={worldImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

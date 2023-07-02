import React from "react";
import herosubtitle from "../pages/Home.module.css";
import herosubtitleh1 from "../pages/Home.module.css";
import herosubtitlep from "../pages/Home.module.css";
import herosubtitlediv from "../pages/Home.module.css";
import herosubtitleimg from "../pages/Home.module.css";
import highlight from "../pages/Home.module.css";
import earthcanvas from "../pages/Home.module.css";
import heroimgbox from "../pages/Home.module.css";
import heroimgboxmain from "../pages/Home.module.css";
import heroimgboxmod from "../pages/Home.module.css";
import { motion } from "framer-motion";
import { slideIn } from "../Utils/motion";
import EarthCanvas from "../components/Canvas/Earth";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg1 from "../assets/images/hero-img02.jpg";
import heroImg2 from "../assets/images/hero-video.mp4";

const Home = () => {
  return (
    <>
      <div className={herosubtitle.herosubtitle}>
        {/* <Subtitle subtitle={"Know before you go"} /> */}
        <div className={herosubtitlediv.herosubtitlediv}>
          <h1 className={herosubtitleh1.herosubtitleh1}>
            Traveling opens the door for creating
            <span className={highlight.highlight}>memories</span>
          </h1>
          <p className={herosubtitlep.herosubtitlep}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dignissimos et repudiandae libero. Nulla voluptatem repudiandae
            natus dolores? Provident ea totam molestias eos doloribus dolor
            atque obcaecati aliquam nam assumenda.
          </p>
        </div>
        <div className={herosubtitleimg.herosubtitleimg}>
          <motion.div
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            variants={slideIn("right", "tween", 0.2, 1)}
            className={earthcanvas.earthcanvas}
          >
            <EarthCanvas />
          </motion.div>
        </div>
<div className={heroimgboxmain.heroimgboxmain}>
        <div className={heroimgbox.heroimgbox}>
          <img className={heroimgboxmod.heroimgboxmod} src={heroImg} alt="" />
        </div>

        <div className={heroimgbox.heroimgbox}>
          <img className={heroimgboxmod.heroimgboxmod} src={heroImg1} alt="" />
        </div>

        <div className={heroimgbox.heroimgbox}>
          <video
            className={heroimgboxmod.heroimgboxmod}
            src='../../src/assets/images/hero-video.mp4'
            alt=""
          />
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;

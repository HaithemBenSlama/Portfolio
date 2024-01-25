import { motion } from "framer-motion";
import { styles } from "../styles";
import React from "react";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Haithem</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop User Interfeces, Desktop{" "}
            <br className="sm:block hidden" />
            and web applications
          </p>
          <div className="lg:absolute flex lg:right-0 lg:bottom-0 w-full lg:w-auto h-full max-w-[737px] max-h-[678px] xl:bottom-0 xl:right-[8%] pt-5 -ml-10">
            <Spline
              className="translate-z-0 w-full h-full"
              scene="https://prod.spline.design/jZInE765alu0SpiI/scene.splinecode"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

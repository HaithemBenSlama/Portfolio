import { motion } from "framer-motion";
import { styles } from "../styles";
import React from "react";
import Spline from "@splinetool/react-spline";
import { IoDownloadOutline } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import Cover from "./Cover";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Cover />
      <div
        className={`absolute inset-0 xl:top-[120px] top-[50px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-2 xl:mt-5">
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
          <div className="flex flex-row xl:gap-4 xl:mt-12 mt-4">
            <button
              type="button"
              className="flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              <FaExternalLinkAlt className="w-4 h-4 text-gray-900 me-2" />
              About me
            </button>

            <button
              type="button"
              className="flex text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <IoDownloadOutline className="w-5 h-5 text-white me-2 font-semibold" />
              Download my CV
            </button>
          </div>
          {/* <div className=" hidden xl:flex lg:absolute  lg:right-0 lg:bottom-0 w-full lg:w-auto h-full xl:bottom-0 -ml-[15%]  ">
            <Spline
              className="translate-z-0 -mt-20"
              scene="https://prod.spline.design/jZInE765alu0SpiI/scene.splinecode"
            />
          </div>
          <div className="flex xl:hidden lg:absolute lg:right-0 lg:bottom-0 w-full lg:w-auto h-full xl:bottom-0 mx-[2%]  ">
            <Spline
              className="translate-z-0"
              scene="https://prod.spline.design/C1GD71CYBzAptJso/scene.splinecode"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

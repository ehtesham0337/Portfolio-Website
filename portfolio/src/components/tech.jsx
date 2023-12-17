import React, { useEffect, useState } from "react";
import { technologies } from "@/constants";
import SectionWrapper from "@/hoc";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { styles } from "@/styles/tailwindStyles";
import useIsMobile from "../hooks/isMobileHook";
import Image from "next/image";

const Tech = () => {
  useIsMobile();
  const isMobile = useIsMobile() <= 768;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Some of the tech I use</p>
        <p className={styles.sectionHeadText}>Technologies</p>
      </motion.div>

      {/* {isMobile ? ( */}
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-4">
          {technologies.map((technology) => (
            <div className="flex flex-col">
              <div className="w-20 h-20" key={technology.name}>
                <Image src={technology.icon} alt={technology.name} />
              </div>
                <p className="text-center mt-3">{technology.name}</p>
            </div>
          ))}
        </div>
      {/* ) : (
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-4">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
              <p className="text-center">{technology.name}</p>
            </div>
          ))}
        </div>
      )} */}

    </>
  );
};

export default SectionWrapper(Tech, "");

import React from "react";
import { technologies } from "@/constants";
import SectionWrapper from "@/hoc";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { styles } from "@/styles/tailwindStyles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Some of the tech I use</p>
        <p className={styles.sectionHeadText}>Technologies</p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-4">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-center">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "@/styles/tailwindStyles";
import { services } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";
import Image from "next/image";
import SectionWrapper from "@/hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", "0.5" * index, "0.75")}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <Image
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducton</p>
        <p className={styles.sectionHeadText}>Overview</p>
      </motion.div>

      {/* fadeIn(direction, type, delay, duration) */}

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software engineer with experience in React, Redux, NextJS,
        JavaScript, TypeScript, Node.js, MaterialUI, Ant Design, MantineUI,
        Bootstrap, Tailwind etc. I'm a quick learner who loves to explore new
        frameworks and technologies. All I need are the official docs and some
        time to get the brain juices flowing. I have industry experience in
        developing modern, highly scalable web apps with REST API integrations,
        delivering a variety of frontend features, and iterative UI/UX fixes
        based on client feedback. I'm currently learning backend development and
        other interests include cloud computing and cybersecurity.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

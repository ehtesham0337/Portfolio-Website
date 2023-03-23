import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles/tailwindStyles";
import github from "../assets/github-mark-white.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { ComputersCanvas } from "./canvas";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-60 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Ehtesham</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A software engineer based in <br className="sm:block hidden" />
            Karachi, Pakistan
          </p>

          <div className="flex gap-4 items-center pt-4">
            <Link href="https://github.com/ehtesham0337" target="_blank">
              <Image
                src={github}
                alt="github"
                className="xs:w-[80px] xs:h-[80px] w-[50px] h-[50px]"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/syed-ehtesham/"
              target="_blank"
            >
              <Image
                src={linkedin}
                alt="linkedin"
                className="xs:w-[100px] w-[65px]"
              />
            </Link>

            <Link href="mailto:s.ehtesham.n@gmail.com" target="_blank">
              <Image
                src={mail}
                alt="mail"
                className="xs:w-[90px] w-[60px]"
                style={{
                  filter:
                    "invert(100%) sepia(0%) saturate(0%) hue-rotate(36deg) brightness(110%) contrast(100%)",
                }}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-36 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

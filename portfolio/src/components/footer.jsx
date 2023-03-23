import React, { useState } from "react";
import { styles } from "@/styles/tailwindStyles";
import Link from "next/link";
import { navLinks } from "@/constants";
import Image from "next/image";
import github from "../assets/github-mark-white.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Footer = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex flex-col items-center py-5  z-20 mt-20 border-t`}
    >
      <p className="text-white text-[18px] font-bold cursor-pointer">
        &copy; 2023 - Syed Ehtesham
      </p>
      <div className="flex gap-4 items-center pt-4">
        <Link href="https://github.com/ehtesham0337" target="_blank">
          <Image src={github} alt="github" className="w-[50px] h-[50px]" />
        </Link>

        <Link href="https://www.linkedin.com/in/syed-ehtesham/" target="_blank">
          <Image src={linkedin} alt="linkedin" className="w-[65px]" />
        </Link>

        <Link href="mailto:s.ehtesham.n@gmail.com" target="_blank">
          <Image
            src={mail}
            alt="mail"
            className=" w-[60px]"
            style={{
              filter:
                "invert(100%) sepia(0%) saturate(0%) hue-rotate(36deg) brightness(110%) contrast(100%)",
            }}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Footer;

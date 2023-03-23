import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Head from "next/head";
import About from "@/components/about";
import Experience from "@/components/experience";
import Tech from "@/components/tech";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import { StarsCanvas } from "@/components/canvas";
import bg from "../assets/herobg.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Syed Ehtesham</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/eLogo.svg" />
        {/* <script type="module" src="../node_modules"></script> */}
      </Head>

      <div className="relative z-0 bg-primary ">
        <div
          className=" bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

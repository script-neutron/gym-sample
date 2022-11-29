"use client";
import React from "react";
import man from "../utils/images/man.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function ImageClient({}: Props) {
  return (
    <motion.div
      initial={{
        x: 300,
        opacity: 0,
      }}
      animate={{ rotate: 360, x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1.5 }}
      className="w-full ">
      <Image
        src={man}
        alt="man"
        className="skew-y-12 hidden md:block md:-mt-32"
      />
    </motion.div>
  );
}

export function IntroSegment({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -300,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{ type: "inertia", velocity: 500 }}
      className="md:w-1/2 md:-mt-32 md:mx-6 z-10 ml-[-50px] text-[#B3F25E] ">
      <h1 className="font-bold text-xl my-3 tracking-[5px] ">
        MAKE YOURSELF <span className="text-[#B3F25E]">STRONGER</span> THAN YOUR{" "}
        <span className="text-[#B3F25E]">EXCUSES.</span>
      </h1>
      <p className=" text-gray-300">
        Regular physical activities can improve your muscle strength and boost
        your endurance. Exercise deliveres oxygen and nutrients to your tissues
        and helps your cardiovascular sysem work more efficiently
      </p>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 1.5 }}
        className="p-3 bg-[#B3F25E] mt-6 rounded-tr-3xl text-xl font-bold text-black">
        <Link href={"#"}>Get Started</Link>
      </motion.button>
    </motion.div>
  );
}

export function MImageClient({}: Props) {
  return (
    <motion.div
      initial={{
        x: 300,
        opacity: 0,
      }}
      animate={{ rotate: 360, x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 1.5 }}
      className="w-full md:hidden absolute  top-16 z-9">
      <Image src={man} alt="man" className="skew-y-12 " />
    </motion.div>
  );
}

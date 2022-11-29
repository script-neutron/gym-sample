"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ShortInfo({}: Props) {
  return (
    <div className="max-w-7xl md:mx-auto flex overflow-hidden justify-between items-center mt-20  snap-center bg-gradient-to-r from-[#0F2027] to-[#2C5364] 0 mx-2 rounded-tl-3xl rounded-br-3xl">
      <div className="container flex  items-center justify-between mx-auto text-center flex-wrap">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          className="flex flex-col p-2">
          <h1 className="font-bold md:text-4xl text-2xl text-gray-400">
            3500+
          </h1>
          <h1 className=" text-gray-200">TOTAL MEMBER</h1>
        </motion.div>
        <motion.div
          initial={{
            y: -500,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          viewport={{
            once: true,
          }}
          className="flex flex-col p-2">
          <h1 className="font-bold md:text-4xl text-2xl text-gray-400">150</h1>
          <h1 className=" text-gray-200">BEST TRAINERS</h1>
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          viewport={{
            once: true,
          }}
          className="flex flex-col p-2">
          <h1 className="font-bold md:text-4xl text-2xl text-gray-400">25</h1>
          <h1 className=" text-gray-200"> PROGRAMME</h1>
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          viewport={{
            once: true,
          }}
          className="flex flex-col p-2">
          <h1 className="font-bold md:text-4xl text-2xl text-gray-400">450+</h1>
          <h1 className=" text-gray-200">INSTRUMENTS</h1>
        </motion.div>
      </div>
    </div>
  );
}

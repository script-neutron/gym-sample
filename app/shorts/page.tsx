"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ShortInfo({}: Props) {
  return (
    <div className="max-w-7xl md:mx-auto flex overflow-hidden justify-between items-center mt-20  snap-center bg-gradient-to-r from-[#0F2027] to-[#2C5364] 0 mx-2 rounded-tl-3xl rounded-br-3xl ">
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
            1000+
          </h1>
          <h1 className=" text-gray-200">CURRENT MEMBERS</h1>
          <h1 className=" text-gray-200">现任成员</h1>
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
          <h1 className="font-bold md:text-4xl text-2xl text-gray-400">50+</h1>
          <h1 className=" text-gray-200">EQUIPMENTS</h1>
          <h1 className=" text-gray-200">设备</h1>
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
          <h1 className="font-bold md:text-4xl text-2xl text-gray-400">40+</h1>
          <h1 className=" text-gray-200"> UNIQUE PROGRAMMES</h1>
          <h1 className=" text-gray-200"> 独特的课程</h1>
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
          <h1 className="font-bold md:text-4xl text-2xl text-gray-400">50+</h1>
          <h1 className=" text-gray-200">QUALIFIED TRAINERS</h1>
          <h1 className="text-gray-200">合格的培训师</h1>
        </motion.div>
      </div>
    </div>
  );
}

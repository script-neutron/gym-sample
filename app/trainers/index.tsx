"use client";
import React from "react";
import Image from "next/image";
import trainer1 from "../utils/images/trainer1.png";
import trainer2 from "../utils/images/trainer2.png";
import trainer3 from "../utils/images/trainer3.png";
import { motion } from "framer-motion";

type Props = {};

const data = [
  {
    images: trainer1,
    name: "JAMES WELLS",
    title: "Fitness Coach",
  },
  {
    images: trainer2,
    name: "RUNNY WADE",
    title: "Body Building",
  },
  {
    images: trainer3,
    name: "LIZY JONS",
    title: "Crossfit Coach",
  },
];

export default function Trainers({}: Props) {
  return (
    <div className="max-w-7xl md:mx-auto my-32 snap-center">
      <div className="mx-12 h-20"></div>
      <h1 className="uppercase font-bold text-3xl mx-12 text-center tracking-[10px]">
        OUR <span className="text-[#B3F25E]">BEST Trainers</span>
      </h1>
      <h1 className="uppercase font-bold text-3xl mx-12 text-center tracking-[10px] text-[#B3F25E]">
        我们最好的培训师
      </h1>
      <div className="grid md:grid-cols-3 gap-5 p-10 snap-mandatory mx-4">
        {data.map((prop) => (
          <motion.div
            initial={{
              opacity: 0,
              x: -300,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{ duration: 1.5 }}
            key={prop.name}
            className="flex flex-col rounded-tl-3xl rounded-br-3xl   cursor-pointer duration-200 bg-[#1f1e1e]  border border-[#B3F25E] -skew-x-12 items-center ">
            <Image src={prop.images} alt={prop.name} className=" w-[12rem] " />

            <h1 className=" uppercase text-lg text-white tracking-[7px] mb-4 ml-2">
              {prop.name}
            </h1>
            <p className=" text-[#7e8b99] mb-4 mx-2">{prop.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

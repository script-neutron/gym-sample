"use client";
import React from "react";
import { GiMuscleUp } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { motion } from "framer-motion";

const data = [
  {
    icon: "GiMuscleUp",
    title: "FLEX MUSCLES",
    description:
      "Muscle flexing is more accurately known as muscle contraction becasue when you flex your muscles, you are creating tension that's temporarily making the muscle fibers smaller or contracted",
  },
  {
    icon: "FaRunning",
    title: "CARDIO TRAINING",
    description:
      "Getting your cardio in on the reg can improve heart health by lowering cholesterol levels and reducing your risk of heart disease.",
  },
  {
    icon: "GrYoga",
    title: "YOGA TRAINING",
    description:
      "Yoga is a type of exercise that moves your body into various positions in order to become flexible and healthy and also improves breathing, thus relaxing your mind",
  },
];

type Props = {};

export default function Programs({}: Props) {
  return (
    <div className="max-w-7xl md:mx-auto h-screen snap-center  " id="programs">
      <div className="mx-12 h-20"></div>

      <h1 className="font-bold text-3xl mx-12 text-center tracking-[10px]">
        OUR <span className="text-[#B3F25E]">PROGRAMES</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-5 p-10 snap-mandatory ">
        {data.map((prop) => (
          <motion.div
            initial={{
              opacity: 0,
              y: -500,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            key={prop.title}
            className="flex flex-col rounded-tl-3xl rounded-br-3xl   cursor-pointer duration-200 bg-[#232526] relative border border-[#B3F25E] -skew-x-12">
            {/* <prop.icon className="ml-2 mb-4 mt-2" size={50} color={"white"} /> */}
            <h1 className=" uppercase text-lg text-white tracking-[7px] mb-4 ml-2 mt-3">
              {prop.title}
            </h1>
            <p className=" text-[#7e8b99] mb-4 mx-2">{prop.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

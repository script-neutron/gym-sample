"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const data = [
  {
    name: "STARTER PACK",
    price: "$60",
    access1: "Unlimited Instruments",
    access2: "Diet Plan included",
    access3: "7 Days a week access",
    access4: "Health and Fitness Tips",
    access5: "--",
    access6: "--",
    access7: "--",
    access8: "--",
  },
  {
    name: "STANDARD PACK",
    price: "$100",
    access1: "Personal Trainer",
    access2: "Unlimited Instruments",
    access3: "Diet Plan included",
    access4: "7 Days a week access",
    access5: "Health and Fitness Tips",
    access6: "Access to bath complex",
    access7: "--",
    access8: "--",
  },
  {
    name: "PREMIUM PACK",
    price: "$140",
    access1: "Personal Trainer",
    access2: "Unlimited Instruments",
    access3: "Diet Plan included",
    access4: "7 Days a week access",
    access5: "Health and Fitness Tips",
    access6: "Snacks",
    access7: "Access to SPA",
    access8: "Access to bath complex",
  },
];

export default function Pricing({}: Props) {
  return (
    <div className="max-w-7xl md:mx-auto my-32 snap-center">
      <div className="mx-12 h-20"></div>
      <h1 className="uppercase font-bold text-3xl mx-12 text-center tracking-[10px]">
        OUR <span className="text-[#B3F25E]">BEST Trainers</span>
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
            <h1 className=" uppercase text-lg text-white tracking-[7px] mb-4 ml-2">
              {prop.name}
            </h1>
            <p className=" text-[#7e8b99] mb-4 mx-2 text-2xl font-bold">
              {prop.price}
              <sub className="mb-0 mx-0 text-sm font-light">/Month</sub>
            </p>
            <p className="text-[#7e8b99] mb-4 mx-2">{prop.access1}</p>
            <p className="text-[#7e8b99] mb-4 mx-2">{prop.access2}</p>
            <p className="text-[#7e8b99] mb-4 mx-2">{prop.access3}</p>
            <p className="text-[#7e8b99] mb-4 mx-2">{prop.access4}</p>
            <p className="text-[#7e8b99] mb-4 mx-2">{prop.access5}</p>
            <p className="text-[#7e8b99] mb-4 mx-2">{prop.access6}</p>
            <p className="text-[#7e8b99] mb-4 mx-2">{prop.access7}</p>
            <p className="text-[#7e8b99] mb-4 mx-2">{prop.access8}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

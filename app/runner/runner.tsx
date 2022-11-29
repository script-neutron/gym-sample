"use client";
import Image from "next/image";
import React from "react";
import runner from "../utils/images/runner.png";
import { motion } from "framer-motion";

type Props = {};

export default function Runner({}: Props) {
  return (
    <div className="max-w-7xl mx-auto mt-14" id="aboutus">
      <h1 className="text-center uppercase font-bold text-3xl mx-12 ">
        About <span className="text-[#B3F25E]">US</span>
      </h1>
      <div className=" grid md:grid-cols-3 grid-flow-row-dense gap-5 justify-between items-center   snap-center">
        <motion.div
          className="md:col-span-2"
          initial={{
            opacity: 0,
            x: -300,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1.5 }}>
          <Image src={runner} alt="runner" />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: -200,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="text-[#7e8b99] p-2 mx-10">
          <h1>
            Regular physical activities can improve your muscle strength and
            boost your endurance. Exercise deliveres oxygen and nutrients to
            your tissues and helps your cardiovascular sysem work more
            efficiently
          </h1>
          <h1 className="mt-2">
            定期进行体育锻炼可以增强肌肉力量并增强耐力。
            运动为您的组织输送氧气和营养，帮助您的心血管系统更有效地工作
          </h1>

          <p className="mt-2 font-medium">
            We are the number one gym company to find the best trainer to take
            you through quality exercise routines.
          </p>
          <p className="mt-2 font-medium">
            我们是第一家找到最好的教练来指导您完成高质量锻炼程序的健身公司。
          </p>
          <button className="p-3 bg-[#B3F25E] mt-12 rounded-bl-3xl text-xl font-bold text-black w-full md:w-auto hover:bg-[#b8d493]">
            {" "}
            学到更多
          </button>
        </motion.div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const data = [
  {
    name: "银色套餐",
    price: "120RMB",
    access1: "无限仪器",
    access2: "包括饮食计划",
    access3: "每周 7 天访问",
    access4: "健康和健身小贴士",
    access5: "--",
    access6: "--",
    access7: "--",
    access8: "--",
  },
  {
    name: "黄金套餐",
    price: "150RMB",
    access1: "私人教练",
    access2: "无限仪器",
    access3: "包括饮食计划",
    access4: "每周 7 天访问",
    access5: "健康和健身小贴士",
    access6: "进入洗浴中心",
    access7: "--",
    access8: "--",
  },
  {
    name: "P钻石套餐",
    price: "200RMB",
    access1: "私人教练",
    access2: "无限仪器",
    access3: "包括饮食计划",
    access4: "每周 7 天访问",
    access5: "健康和健身小贴士",
    access6: "零食",
    access7: "进入SPA",
    access8: "进入洗浴中心",
  },
];

export default function Pricing({}: Props) {
  return (
    <div className="max-w-7xl md:mx-auto my-32 snap-center">
      <div className="mx-12 h-20"></div>
      <h1 className="uppercase font-bold text-3xl mx-12 text-center tracking-[10px]">
        OUR <span className="text-[#B3F25E]">Packages</span>
      </h1>
      <h1 className="uppercase font-bold text-3xl mx-12 text-center tracking-[10px]">
        <span className="text-[#B3F25E]">我们的套餐</span>
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
              <sub className="mb-0 mx-0 text-sm font-light">/月</sub>
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

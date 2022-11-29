"use client";
import React from "react";
import Image from "next/image";
import post1 from "../utils/images/post1.jpg";
import post2 from "../utils/images/post2.jpg";
import post3 from "../utils/images/post3.jpg";
import { motion } from "framer-motion";

type Props = {};

const data = [
  {
    images: post1,
    name: "健康饮食和锻炼以获得独特的体型",
    post: "我们教您如何计划您的膳食，并根据您想要达到的身体类型提供特殊的锻炼说明。  ",
  },
  {
    images: post2,
    name: "在不到一个月的时间内减肥",
    post: "通过我们精心计划的锻炼程序，我们能够帮助您进行所需的无压力锻炼，让您在短短一个月内减轻体重。 我们的期望可以帮助您逐渐度过这段时期，并为您提供实现这一目标所需的练习。",
  },
  {
    images: post3,
    name: "一个月内练出强壮肌肉",
    post: "我们为那些寻求以指数方式发展肌肉的人提供最好的健身器材和训练器。 有各种各样的健身器材可供您使用，您身体的每个部位都有一台机器可以锻炼您的肌肉。",
  },
];

export default function Posts({}: Props) {
  return (
    <div className="max-w-7xl md:mx-auto my-32 snap-center">
      <div className="mx-12 h-20"></div>
      <h1 className="uppercase font-bold text-3xl mx-12 text-center tracking-[10px]">
        LATEST <span className="text-[#B3F25E]">POSTS</span>
      </h1>
      <h1 className="uppercase font-bold text-3xl mx-12 text-center tracking-[10px]">
        <span className="text-[#B3F25E]">最新的帖子</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-5 p-10 snap-mandatory mx-4  translate-y-4 -skew-y-3">
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
            className="flex flex-col rounded-tl-xl rounded-br-xl   cursor-pointer duration-200 bg-[#1f1e1e]  border border-[#B3F25E]  items-center ">
            <Image
              src={prop.images}
              alt={prop.name}
              className=" rounded-tl-xl  "
            />

            <h1 className=" uppercase text-lg text-white mb-4 ml-2 mt-3">
              {prop.name}
            </h1>
            <p className=" text-[#7e8b99] mb-4 mx-2">{prop.post}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

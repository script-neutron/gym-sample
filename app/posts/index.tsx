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
    name: "How to Eat and Exercise for a unique body type",
    post: "There once lived an old man and an old woman who were peasants and had to work hard to earn their daily bread. ",
  },
  {
    images: post2,
    name: "How to loose weight effortless",
    post: "There once lived an old man and an old woman who were peasants and had to work hard to earn their daily bread. ",
  },
  {
    images: post3,
    name: "How to develop your muscles in less than 30 days",
    title: "Crossfit Coach",
    post: "There once lived an old man and an old woman who were peasants and had to work hard to earn their daily bread. ",
  },
];

export default function Posts({}: Props) {
  return (
    <div className="max-w-7xl md:mx-auto my-32 snap-center">
      <div className="mx-12 h-20"></div>
      <h1 className="uppercase font-bold text-3xl mx-12 text-center tracking-[10px]">
        LATEST <span className="text-[#B3F25E]">POSTS</span>
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

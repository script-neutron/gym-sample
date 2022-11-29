"use client";
import React from "react";
import { GiMuscleUp } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";
import { motion } from "framer-motion";

const data = [
  {
    icon: "GiMuscleUp",
    title: "硬拉",
    description:
      "硬拉的有效性仅次于深蹲（紧随其后），硬拉是另一种锻炼肌肉的力量，它可以让你变得像熊一样强壮。 和深蹲一样，硬拉也是杠铃练习。",
  },
  {
    title: "心肺训练",
    description:
      "通过降低胆固醇水平和降低患心脏病的风险，让您的有氧运动成为常态可以改善心脏健康。",
  },
  {
    title: "瑜伽训练",
    description:
      "瑜伽是一种运动，可以将您的身体移动到各种位置，以变得灵活和健康，还可以改善呼吸，从而放松您的心灵",
  },
  {
    title: "高架压力机",
    description:
      "与卧推一样，可以使用许多质量变化的高架压力机。 几乎所有的坐姿和站立哑铃和杠铃过头推举都是不错的选择。 您也可以使用 Arnold 哑铃推举和颈后推举。 另一种流行的推举方式是站立推举。",
  },
  {
    title: "行数",
    description:
      "杠铃划船和哑铃划船都是很好的上背部锻炼。 老式杠铃 T 字杠划船也是不错的选择。 虽然电缆和机器升降机通常低于标准，但坐式电缆排可能非常具有挑战性和效率。",
  },
  {
    title: "引体向上",
    description:
      "令人震惊的是，引体向上（手掌朝向脸部）是一种非常强大的二头肌锻炼方法，甚至可能比直杆弯举更好。",
  },
  {
    title: "低强度有氧运动",
    description:
      "这种类型的锻炼对所有级别都安全有效，可以帮助您燃烧卡路里和减轻体重",
  },
  {
    title: "壶铃锻炼",
    description:
      "大多数壶铃锻炼包括深蹲、弓步、仰卧起坐和其他锻炼腹肌和其他核心肌肉的动作。 武器：是的。 壶铃用作单臂划船和肩部推举等手臂练习的重量。 腿：对。 弓步和深蹲是壶铃锻炼中最受欢迎的动作之一。",
  },
];

type Props = {};

export default function Programs({}: Props) {
  return (
    <div className="max-w-7xl md:mx-auto snap-center  " id="programs">
      <div className="mx-12 h-20"></div>

      <h1 className="font-bold text-3xl mx-12 text-center tracking-[10px]">
        OUR <span className="text-[#B3F25E]">PROGRAMES</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-5 p-10 snap-mandatory ">
        {data.map((prop) => (
          <motion.div
            initial={{
              opacity: 0,
              y: -300,
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

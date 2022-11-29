import React from "react";
import { TiTickOutline } from "react-icons/ti";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="max-w-7xl md:mx-auto my-40 snap-center">
      <div className="grid md:grid-cols-3 gap-4 md:mx-8 mx-3">
        <div className="flex flex-col text-[#B0B0B0] space-y-2">
          <h1 className="uppercase text-3xl text-white">
            {" "}
            ANY INFORMATION <span className="text-[#B3F25E]">NEEDED?</span>
          </h1>
          <p>
            在帮助您实现理想体型方面，我们是全面的专家。
            我们使用标准的国际运动训练模式，确保为您提供身体所需的一切。
          </p>
          <p className="flex">
            {" "}
            <span className="mr-2 font-medium">24/7 支持 </span>{" "}
            <TiTickOutline />
          </p>{" "}
          <p className="flex">
            {" "}
            <span className="mr-2 font-medium">优质设备</span> <TiTickOutline />
          </p>{" "}
          <p className="flex">
            {" "}
            <span className="mr-2 font-medium">顶级培训师</span>{" "}
            <TiTickOutline />
          </p>{" "}
        </div>
        <div></div>
        <div className="mt-4 text-center">
          <h1 className="text-2xl text-[#B0B0B0]  tracking-[10px]">联系我们</h1>
          <SocialIcon
            url="https://jaketrent.com"
            network="wechat"
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
}

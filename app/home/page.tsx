import ImageClient, { IntroSegment, MImageClient } from "./imageclient";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <div className="h-screen max-w-7xl mx-auto flex overflow-hidden justify-between items-center mt-[-2rem] relative snap-center">
        <IntroSegment />
        <ImageClient />
        <MImageClient />
        <div className="bg-[#304416] absolute top-2 bottom-0 right-0 left-[50%] -skew-x-12 -z-10 rounded-l-3xl"></div>
      </div>
    </>
  );
}

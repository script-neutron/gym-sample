import React from "react";
import Home from "./home/page";
import ShortInfo from "./shorts/page";
import Programs from "./programs/cards";
import Runner from "./runner/runner";
import Trainers from "./trainers";
import Pricing from "./pricing";
import Posts from "./posts";
import Contact from "./contact";

type Props = {};

export default function Page({}: Props) {
  return (
    <div>
      <Home />
      <ShortInfo />
      <Programs />
      <Runner />
      <Trainers />
      <Pricing />
      <Posts />
      <Contact />
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../utils/images/logo.png";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {};

export default function Header({}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.nav
      initial={{
        x: -500,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
      className=" px-2 py-2.5 sticky top-0 z-20">
      <div className="container flex  items-center justify-between mx-auto relative max-w-7xl ">
        <a href="" className="flex items-center">
          <Image src={logo} className=" mr-3 w-48" alt="Flowbite Logo" />
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2  dark:focus:ring-orange-600 text-orange-500 hover:text-orange-700"
          aria-controls="navbar-default"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
        <motion.div
          initial={{
            y: -500,
            opacity: 0,
            scale: 0.4,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{
            once: true,
          }}
          className="hidden  md:block "
          id="navbar-default">
          <ul className="flex flex-row p-4 items-center justify-between rounded-lg space-x-12 text-[#B3F25E] ">
            <motion.li
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 1.5 }}
              className=" font-medium text-lg hover:text-[#6f963d]">
              <Link href={"#"}>Home</Link>
            </motion.li>

            <motion.li
              whileHover={{
                scale: 1.3,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 1.5 }}
              className=" font-medium text-lg hover:text-[#6f963d]">
              <button
                onClick={() =>
                  document.getElementById("aboutus").scrollIntoView()
                }>
                About Us
              </button>
            </motion.li>

            <motion.li
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 1.5 }}
              className=" font-medium text-lg hover:text-[#6f963d]">
              <button
                onClick={() =>
                  document.getElementById("programs").scrollIntoView()
                }>
                Courses
              </button>
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          whileTap={{ scale: 1.5 }}
          className="hidden md:block p-3 bg-orange-500 rounded-lg text-white font-bold hover:bg-orange-700 cursor-pointer ">
          {" "}
          Contact Us
        </motion.div>
      </div>
      {/* Mobile list */}
      {menuOpen ? (
        <motion.aside
          initial={{
            y: 500,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 0.9,
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{
            once: true,
          }}
          className=" absolute right-0  w-36  overflow-hidden mx-3 bg-transparent bg-neutral-800 rounded-lg"
          id="navbar-default">
          <ul className="flex flex-col items-center justify-between rounded-lg  text-[#B3F25E] text-xl ">
            <motion.li
              whileHover={{
                scale: 1.3,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 1.5 }}
              className=" font-medium  hover:text-[#6f963d] py-7">
              <Link href={"#"}>Home</Link>
            </motion.li>

            <motion.li
              whileHover={{
                scale: 1.3,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 1.5 }}
              className=" font-medium  hover:text-[#6f963d] py-7">
              <button
                onClick={() =>
                  document.getElementById("aboutus").scrollIntoView()
                }>
                About Us
              </button>
            </motion.li>

            <motion.li
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 1.5 }}
              className=" font-medium  hover:text-[#6f963d] py-7">
              <button
                onClick={() =>
                  document.getElementById("programs").scrollIntoView()
                }>
                Courses
              </button>
            </motion.li>
          </ul>
          <motion.button
            whileTap={{ scale: 1.5 }}
            className="text-center   bg-orange-700 rounded-lg text-white font-bold hover:bg-orange-500 cursor-pointer p-3 w-full mt-7">
            Contact Us
          </motion.button>
        </motion.aside>
      ) : null}

      {/* Mobile list */}
    </motion.nav>
  );
}

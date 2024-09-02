import React from "react";
import { SiDiscord } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { LiaCopyrightSolid } from "react-icons/lia";
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="px-5 sm:px-20 py-5 sm:py-10 mb-2 flex flex-wrap justify-between sm:justify-start gap-y-5 sm:gap-x-20 gap-x-5 border-t-2 border-b-2  border-cyan-500 ">
        <div className=" text-cyan-600">
          <h1 className=" font-bold ">About</h1>
          <h2>100 projects</h2>
          <h2>Sarah's Blog</h2>
        </div>
        <div className=" text-cyan-600">
          <h1 className=" font-bold ">Follow us</h1>
          <h2>Github</h2>
          <h2>Discord</h2>
          <h2>Linkedin</h2>
        </div>
        <div className=" text-cyan-600">
          <h1 className=" font-bold ">Legal</h1>
          <h2>Privacy Policy</h2>
          <h2>Terms & Conditions</h2>
        </div>
        <div className="text-2xl text-cyan-600 flex gap-3">
          <SiDiscord />
          <SiGithub />
          <SiLinkedin />
        </div>
      </div>
      <span className="p-2 flex items-center justify-center text-gray-400">
        <LiaCopyrightSolid className="mr-1" />
        2024 Sarah Habibi
        <div className="flex gap-x-6 ml-3">
          <SiLinkedin />
          <SiInstagram />
          <SiFacebook />
          <SiGithub />
          <RiTwitterXFill />
        </div>
      </span>
    </div>
  );
};

export default Footer;

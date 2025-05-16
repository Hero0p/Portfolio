import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-15" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/nishant-chaudhary-49238028a/"><FaLinkedin /></a>
        <a href="https://github.com/Hero0p"><FaGithub /></a>
        <a href="https://x.com/"><FaXTwitter /></a>
        <a href="https://www.instagram.com/bhoot_huh_mein/"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;

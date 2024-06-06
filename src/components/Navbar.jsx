import logo from "../assets/bhagya.jpg";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <nav className="mb-5 flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10 rounded-full" src={logo} alt="logo" />
        </div>
        <div className="flex gap-8 text-xl">
          <a href="">
            <h6 className="hidden md:block">Home</h6>
          </a>
          <a href="#about">
            <h6 className="hidden md:block">About</h6>
          </a>
          <a href="#technologies">
            <h6 className="hidden md:block">Skills</h6>
          </a>
          <a href="#projects">
            <h6 className="hidden md:block">Projects</h6>
          </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/bhagyanimash/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/bhagyanimash">
            <FaGithub />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

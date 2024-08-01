import React from "react";
import { CONTACT } from "../constants";
import { animate, motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="text-center tracking-tighter">
        <p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <a href="mailto:nimashbhagya@gmail.com" className="border-b">
            {CONTACT.email}
          </a>
        </p>
        <p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </p>
        <p>{CONTACT.address}</p>
        <div className="m-4 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/bhagyanimash/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/bhagyanimash">
            <FaGithub />
          </a>
          <a href="https://web.facebook.com/bhagya.nimash.9/">
            <FaFacebook />
          </a>
        </div>
        <p className="text-s">All rights reserved by @bhagyanimash</p>
      </div>
    </div>
  );
}

export default Contact;

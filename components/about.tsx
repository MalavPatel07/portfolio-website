"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span>I'm a dynamic Computer Science graduate with a passion for innovation and problem-solving. 
          From teaching Java to hundreds of students to crafting robust software solutions at top tech firms, I thrive in fast-paced, collaborative environments. 
          My goal? To leverage technology to create meaningful impact and push the boundaries of what's possible. 
          Let's build something extraordinary together. </span>
      </p>
    </motion.section>
  );
}

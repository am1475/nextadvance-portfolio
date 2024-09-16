"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // Import LeetCode icon

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/am1475"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={30} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/amartya-paul-702650245/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={30} />
          </a>

          {/* HackerRank */}
          <a
            href="https://www.hackerrank.com/profile/amartyapaul760"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaHackerrank size={30} />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/amartyapaul_569/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <SiLeetcode size={30} />
          </a>
        </div>

        <p className="mt-6 text-gray-400 text-sm">
          @ Developed by Amartya Paul. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

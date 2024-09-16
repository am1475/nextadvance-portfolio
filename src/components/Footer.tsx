"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex space-x-6">
          {/* GitHub */}
          <a href="https://github.com/am1475" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={30} />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/amartya-paul-702650245/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={30} />
          </a>

          {/* HackerRank */}
          <a href="https://www.hackerrank.com/profile/amartyapaul760" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512" fill="currentColor">
              <path d="M477.5 128.9c-10.8-18.5-24.5-35.5-40.6-49.5s-34.1-25.1-53.6-32.8c-20.8-8.4-43-12.7-65.5-12.7-43.7 0-82.9 18.2-106.2 47.8-2.2-3.2-4.6-6.4-7-9.5-5.7-7.7-12-15-18.6-21.6-18.4-18.4-40.5-32.4-65-41.7-27.5-10.5-57.1-15.5-87-15.5s-59.5 5.1-87 15.5c-24.6 9.4-46.6 23.3-65 41.7-6.6 6.6-12.9 13.9-18.6 21.6-8.7 11.7-16.1 24.1-22 37.1-11.9 26.6-18 55.3-18 84.3s6.1 57.7 18 84.3c5.9 13 13.3 25.4 22 37.1 6.7 7.7 14 15 22 21.6 18.5 18.5 40.7 32.5 65.2 41.9 27.6 10.6 57.2 15.7 87.3 15.7 3.2 0 6.5 0 9.7-.2 1.1-.1 2.3-.2 3.4-.4 11.5-1.1 22.8-2.6 33.9-4.9 5.7-1.1 11.3-2.4 16.8-3.9 21.5-5.9 41.6-15 59.6-27.1 2.6-1.7 5.1-3.4 7.7-5.1 11.7-8.3 22.7-17.6 32.9-27.9 8.4-8.4 16.2-17.4 23.2-26.8 8.5-11.1 16.2-22.8 23-34.8 12-21.9 21.6-45 28.3-69.3 8.5-29.9 12.6-60.6 12.6-91.5 0-30.8-4.2-61.5-12.7-91.4z"/>
            </svg>
          </a>

          {/* LeetCode */}
          <a href="https://leetcode.com/u/amartyapaul_569/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256" fill="currentColor">
              <path d="M201.8 121.8c-4.7-4.7-9.5-9.4-14.2-14.2-21.4-21.5-42.9-43.1-64.3-64.6-11.1-11.1-25.3-15.1-39.8-14.2-9.1.5-17.8 3.7-25.5 8.8-9.6 6.7-17.4 15.6-23.7 25.9-9.8 15.9-13.7 33.1-13.1 51.7.7 21.8 9.4 41.6 24.7 57.6 13.1 13.7 27.2 26.6 41.6 39.6 7.8 7.2 15.8 14.3 23.5 21.4 4.9 4.6 10.2 8.2 16.1 11.1 11.8 5.8 24.3 7.6 37.2 4.6 10.6-2.6 19.8-8.6 27.8-16.5 7.8-7.8 14.3-16.7 19.4-26.7 6.2-12 11-24.5 13.4-37.7 2.9-15.4 2.4-30.5-1.3-45.7-3.1-12.6-9.2-23.8-17.8-33.5z"/>
            </svg>
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

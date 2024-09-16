"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function LampDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center mt-24 mb-40 px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-3xl sm:text-4xl md:text-7xl font-medium tracking-tight text-transparent">
          Contact Me
        </h1>

        <p className="text-xl sm:text-2xl md:text-4xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center mt-10 sm:mt-20 md:mt-16">
          Get in touch
        </p>

        {/* Contact Form Section */}
        <div className="mt-8 sm:mt-12 w-full max-w-lg bg-gray-900 p-6 sm:p-8 rounded-lg shadow-md mx-auto relative">
          <form className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
                rows={4}
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Add extra space at the bottom */}
        <div className="pb-32 sm:pb-40 lg:pb-48"></div> {/* Increased padding-bottom for larger spacing */}
      </div>
    </BackgroundBeamsWithCollision>
  );
}

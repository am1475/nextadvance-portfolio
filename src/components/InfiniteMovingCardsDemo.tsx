"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Background Div */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Heading */}
      <p className="text-2xl sm:text-4xl md:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center mt-20 sm:mt-32 md:mt-16">
        Skills
      </p>

      {/* Infinite Moving Cards - First Scroll */}
      <div className="relative z-20">
        <InfiniteMovingCards
          items={images}
          direction="right"
          speed="slow"
        />
      </div>

      {/* Infinite Moving Cards - Reverse Scroll */}
      <div className="relative z-20 mt-8 overflow-x-hidden h-auto">
        <InfiniteMovingCards
          items={techStackImages}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}

// First Image Data (Existing Images)
const images = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
    alt: "Redux Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    alt: "Node.js Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    alt: "TypeScript Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "Tailwind CSS Logo",
  },
];

// Second Image Data (Tech Stack Images)
const techStackImages = [
  {
    src: "https://res.cloudinary.com/dqm8rxpzq/image/upload/v1726385144/firebase_pz7ld8.jpg",
    alt: "Firebase Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    alt: "PostgreSQL Logo",
  },
  {
    src: "https://res.cloudinary.com/dqm8rxpzq/image/upload/v1726387641/1_doAg1_fMQKWFoub-6gwUiQ_gkbo9o.png",
    alt: "MongoDB Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    alt: "TensorFlow Logo",
  },
  {
    src: "https://res.cloudinary.com/dqm8rxpzq/image/upload/v1726389082/expressjs-logo_z6tpfr.svg",
    alt: "Express.js Logo",
  },
  {
    src: "https://res.cloudinary.com/dqm8rxpzq/image/upload/v1726388633/Google-Cloud-Platform-GCP-logo_pzrml9.png",
    alt: "GCP Logo",
  },
  {
    src: "https://res.cloudinary.com/dqm8rxpzq/image/upload/v1726388896/Vercel_cptt8a.jpg",
    alt: "Vercel Logo",
  },
];

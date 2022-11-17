import React from "react";
import SocialLinks from "./SocialLinks";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center pl-24">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Mahika Garg.
            <br className="hidden lg:inline-block" />I love to explore new things.
          </h1>
          <p className="mb-8 leading-relaxed text-xl">
            Currently, I'm pursuing a B.Tech at the Maharaja Agrasen Institute of Technology. I'm a full stack web developer.
            At the moment, I am working on my DSA. I am fascinated by new technologies and happy to explore them.I enjoy collaborating with others and
            gaining new experiences and skills while doing so.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="./resume.pdf"
              download
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Resume
            </a>
          </div>
          <SocialLinks/>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full w-3/4 h-4/5"
            alt="hero"
            src="./pic.jpg"
          />
        </div>
      </div>
    </section>
  );
}

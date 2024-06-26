import React from "react";

export default function About() {

  const experienceDays = '8';

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
            Hi, I'm Gabriele
            <br className="hidden lg:inline-block" />I'm passionate about <b>Digital Analytics</b> and <b>Front-End Development</b>
          </h1>
          <p className="mb-8 leading-relaxed">
            With over {experienceDays} years experience across multinationals and startups, 
            I've worked with international teams to build Digital Tracking from the ground up,
            and learned Front-End development skills on modern tech stacks
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#experience"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Previous Experience
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <a href="https://www.linkedin.com/in/gabriele-giucca-9aaa7a9b/">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="https://media.licdn.com/dms/image/C4D03AQGFMBW3qmWPPg/profile-displayphoto-shrink_200_200/0/1662565850352?e=1722470400&v=beta&t=PaG5V9A7-JJm7Bmm56gI_LS8qxU6MPt1acMi5Z74C6s"
          /> 
          </a>
        </div>
      </div>
    </section>
  );
}

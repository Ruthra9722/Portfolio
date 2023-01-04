import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          A motivated full stack web developer with a strong work ethic and data
          structures and algorithms. Deeply knowledgeable in a wide variety of
          computer languages, including front end and backend technology,
          understands principles and techniques of initial website construction
          and ongoing maintenance. Strong communicator and is flexible with
          scheduling.
        </p>

        <br />

        <p className="text-xl">
          As a Full Stack Developer, I have a passion for building and
          implementing web applications that solve real-world problems. With
          over 1 years of experience in the industry, I have a strong background
          in front-end and back-end development using a variety of technologies
          including HTML, CSS, JavaScript, React, Node.js,Express js, MongoDB
          and Strapi.
          <br />
          <br />
          My goal as a Full Stack Developer is to provide high-quality solutions
          that help businesses improve their operations and achieve their goals.
          I am confident in my ability to deliver results and I am always eager
          to take on new challenges and opportunities. If you are looking for a
          reliable and skilled Full Stack Developer, please feel free to contact
          me to discuss how I can contribute to your success.
        </p>
      </div>
    </div>
  );
};

export default About;

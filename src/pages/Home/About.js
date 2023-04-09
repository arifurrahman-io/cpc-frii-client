import React from "react";
import img from "../../assets/programmingimportance.png";
import ReactPlayer from "react-player";

const About = () => {
  return (
    <div>
      <div>
        <ReactPlayer
          url={`https://youtu.be/Yz-_85gUux0`}
          className="max-w-[720px] mx-auto my-20"
          width="100%"
          controls={true}
        ></ReactPlayer>
        <div className="card lg:flex lg:flex-row-reverse max-w-[1280px] mx-auto my-20 lg:my-36">
          <figure className="lg:w-2/5">
            <img src={img} alt="About" />
          </figure>
          <div className="card-body lg:w-3/5 md:my-auto">
            <h2 className="card-title text-2xl lg:text-4xl my-4 font-ubuntu">
              About FRII CPC
            </h2>
            <p className="text-lg lg:text-xl text-justify font-signika">
              We aim to provide a platform for students to learn and develop
              their skills in programming, computer science, and related areas
              such as robotics, artificial intelligence, and cybersecurity.
            </p>
            <p className="text-lg lg:text-xl text-justify font-signika">
              Our club will inspire students to be creative and innovative in
              their approach to problem-solving and use their skills to develop
              solutions to real-world problems.
            </p>
            <p className="text-lg lg:text-xl text-justify font-signika">
              We will strive to build a community of students who are passionate
              about computer science and programming and create an inclusive
              environment where everyone feels welcome and supported.
            </p>
            <ul className="steps mt-12 font-kalam">
              <li className="step step-primary">Register</li>
              <li className="step step-primary">Admin Approvel</li>
              <li className="step">Choose Course</li>
              <li className="step">Be Skilled</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

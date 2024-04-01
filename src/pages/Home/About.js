import React from "react";
import img from "../../assets/programmingimportance.png";

const About = () => {
  return (
    <div>
      <div>
        <div className="card lg:flex lg:flex-row-reverse max-w-[1280px] mx-auto my-20 lg:my-36">
          <figure className="lg:w-2/5">
            <img src={img} alt="About" />
          </figure>
          <div className="card-body lg:w-3/5 md:my-auto">
            <h2 className="card-title text-2xl lg:text-4xl my-4 font-ubuntu">
              About Me
            </h2>
            <p className="text-lg lg:text-xl text-justify font-signika">
            I am a tech enthusiast with a knack for turning ideas into reality. As a full-stack web developer, I specializes in crafting elegant and efficient digital solutions, from sleek front-end interfaces to robust back-end architectures.
            </p>
            <p className="text-lg lg:text-xl text-justify font-signika">
            With a passion for mobile technology, I extends their expertise to Android app development, creating intuitive and engaging experiences for users on the go. Whether it's building native applications in Java or harnessing the power of Kotlin, I ensures that every app they develop is polished to perfection.
            </p>
            <p className="text-lg lg:text-xl text-justify font-signika">
            Beyond coding, I am also a dedicated online tutor, sharing their knowledge and expertise with aspiring developers worldwide. Through engaging lessons and personalized guidance, I empowers students to master the intricacies of web and mobile development, helping them unlock their full potential in the ever-evolving tech landscape.
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

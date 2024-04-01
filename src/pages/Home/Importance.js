import React from "react";
import img1 from "../../assets/about.png";
import { Link } from "react-router-dom";

const Importance = () => {
  return (
    <div className="card lg:card-side max-w-[1280px] mx-auto my-20 lg:my-36">
      <figure className="lg:w-2/5">
        <img src={img1} alt="Album" />
      </figure>
      <div className="card-body lg:w-3/5 md:my-auto">
        <h2 className="card-title text-2xl lg:text-4xl my-4 font-ubuntu">
          Importance of Growing Skills
        </h2>
        <p className="text-lg lg:text-xl text-justify font-signika">
        Welcome to the digital classroom guided by me, a seasoned online tech instructor dedicated to unlocking the vast world of technology for eager learners. With a wealth of experience in web development, Android app creation, and a passion for teaching, I bring a unique blend of expertise and enthusiasm to every virtual session.
        </p>
        <p className="text-lg lg:text-xl text-justify font-signika">
        Step into a learning environment where complex concepts are simplified, and hands-on experience is valued above all. Through interactive lessons, live coding sessions, and personalized guidance, I empower students to not only grasp the fundamentals of coding but also to thrive in the ever-evolving tech landscape.
        </p>
        <p className="text-lg lg:text-xl text-justify font-signika">
        Join with me on this transformative learning adventure and discover the endless possibilities awaiting in the world of technology.
        </p>
        <div className="card-actions justify-end ">
          <Link to="/courses" className="btn btn-primary font-pt">
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Importance;

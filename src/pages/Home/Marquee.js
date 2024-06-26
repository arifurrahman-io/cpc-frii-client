import React from "react";
import Marquee from "react-fast-marquee";

const MyMarquee = () => {
  return (
    <div>
      <Marquee gradient={false} className="font-acme text-lg">
        <span className="text-amber-600">
          &nbsp;&nbsp;-Important-&nbsp;&nbsp;
        </span>
        Dear Members, Fundamentals of Python Programming Course has been released.
      </Marquee>
    </div>
  );
};

export default MyMarquee;

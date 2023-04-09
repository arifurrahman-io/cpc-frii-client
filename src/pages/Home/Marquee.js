import React from "react";
import Marquee from "react-fast-marquee";

const MyMarquee = () => {
  return (
    <div>
      <Marquee gradient={false} className="font-acme text-lg">
        <span className="text-amber-600">
          &nbsp;&nbsp;-Important-&nbsp;&nbsp;
        </span>
        Dear Members, Programming class videos will be released every Monday and
        Friday at 9 pm from now. To know more you can send message from the Q/A
        section on your dashboard. - Stay with CPC.
      </Marquee>
    </div>
  );
};

export default MyMarquee;

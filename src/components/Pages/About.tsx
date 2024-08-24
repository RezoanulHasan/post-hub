"use client";
import React from "react";
import useTitle from "../Hooks/useTitle";

const About = () => {
  useTitle("About US");

  return (
    <div className="text-center mt-60  ">
      <h1 className="text-teal-500 font-semibold    text-2xl  ">
        {" "}
        About page Content Update very soon .....
      </h1>
    </div>
  );
};

export default About;

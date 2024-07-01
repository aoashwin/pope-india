"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("People Organisation for Planning and Education")
          .pauseFor(1000)
          .deleteAll()
          .typeString("A Registered society !")
          .pauseFor(1000)
          .start();
      }}
    />
  );
};



export default TypewriterTitle;
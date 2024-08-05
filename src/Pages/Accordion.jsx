import React from "react";
import Main from "../Components/Main";

const Accordion = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-purple-300 px-0 py-0">
      <div className="flex items-center justify-center w-full h-[60%] relative">
        <img
          src="/images/background-pattern-desktop.svg"
          className="w-full h-full mt-[-200px]"
          alt="background"
        />
        <div className="absolute mt-[180px]">
          <Main />
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-[50%]"></div>
    </div>
  );
};

export default Accordion;

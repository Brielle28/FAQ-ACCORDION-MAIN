import React from "react";
import Main from "../Components/Main";

const Accordion = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-purple-300">
      {/* Background Image */}
      <img
        src="/images/background-pattern-desktop.svg"
        className="absolute inset-0 w-full h-[50%] object-cover "
        alt="background"
      />

      {/* Main Component */}
      <div className="relative flex items-center justify-center w-[90%] h-[60%] md:mt-[50px] mt-[100px]">
        <Main />
      </div>

      {/* Empty Div for Background Coverage */}
      <div className="flex items-center justify-center w-full h-full bg-purple-300 "></div>
    </div>
  );
};

export default Accordion;

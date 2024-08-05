import React from "react";
import "../../src/App.css";
import { data } from "../utilities/data";

const Main = () => {
  return (
    <div className="flex flex-col items-start justify-center bg-white px-4 sm:px-5 py-5 rounded-[17px] w-[100%] sm:w-[90%]">
      <div className="flex items-start justify-start gap-2">
        <img
          src="/images/icon-star.svg"
          alt="star"
          className="mt-3 w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"
        />
        <h5 className="text-[32px] sm:text-[50px] text-black font-WorkSans font-bold">
          FAQs
        </h5>
      </div>
      <div className="w-full">
        {data.map((faq, index) => (
          <div key={index} className="collapse bg-white text-black border-b-[1.2px] rounded-none border-gray-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title flex justify-between items-center">
              <h1 className="text-stone-800 font-semibold font-WorkSans text-[16px] sm:text-[18px]">
                {faq.title}
              </h1>
              {/* Add your collapse icon here */}
            </div>
            <div className="collapse-content">
              <p className="w-[90%] sm:w-[80%] px-1 sm:px-3 text-[14px] sm:text-[15px]">
                {faq.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;

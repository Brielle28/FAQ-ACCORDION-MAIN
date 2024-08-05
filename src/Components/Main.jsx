import React from "react";
import "../../src/App.css";
import { data } from "../utilities/data";

const Main = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white px-10 py-5 rounded-[17px] w-[80%]">
        <div className="flex items-start justify-start gap-2">
          <img
            src="/images/icon-star.svg"
            alt="star"
            className="mt-3 w-[50px] h-[50px]"
          />
          <h5 className="text-[50px] text-black font-WorkSans font-bold">
            FAQs
          </h5>
        </div>
        <div>
          {data.map((faq, index) => (
            <div key={index} className="collapse bg-white text-black border-b-[1.2px] rounded-none border-gray-300">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title">
                <h1 className="text-stone-800 font-semibold font-WorkSans text-[18px]">
                  {faq.title}
                </h1>
              </div>
              <div className="collapse-content">
                <p className="w-[80%] px-3 text-[15px]">
                  {faq.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;

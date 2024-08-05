import React from "react";
import "../../src/App.css"

const Main = () => {
  return (
    <>
      <div className="bg-white px-10 py-5 rounded-[17px]">
        <div className="flex items-start justify-start gap-2">
          <img src="/images/icon-star.svg" alt="star" className="mt-3 size-[50px]" />
          <h5 className="text-[50px] text-black font-WorkSans font-bold">FAQs</h5>
        </div>
        <div>
          <div className="collapse  bg-white text-black border-b-[1.2px] rounded-none border-gray-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse  bg-white text-black border-b-[1.2px] rounded-none border-gray-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse  bg-white text-black border-b-[1.2px] rounded-none border-gray-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

import React from "react";

const Main = () => {
  return (
    <>
      <div className="bg-white px-10 py-5 rounded-[17px]">
        <div className="flex items-start justify-start gap-2">
          <img src="/images/icon-star.svg" alt="star" />
          <h5 className="text-[32px] text-black font-mono font-semibold">FAG'S</h5>
        </div>
        <div>
          <div className="collapse collapse-plus bg-white text-black border-b-[1.2px] rounded-none border-gray-500">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white text-black border-b-[1.5px] rounded-none border-gray-500">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white text-black border-b-[1.5px] rounded-none border-gray-500">
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

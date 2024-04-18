import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 bg-gradient-to-t from-slate-50 to-blue-200">
      <div className="flex items-center justify-center flex-col mt-20">
        <div>
          <h2 className="font-bold mb-2">NEW ARRIVALS ONLY</h2>
          <div className="text-6xl font-bold">
            <div className="flex mb-1">
              <p>new</p>
              <img className="w-14 ml-3" src={hand_icon} alt="" />
            </div>
            <p className="mb-1">collections</p>
            <p>for everyone</p>
          </div>
          <div className="bg-red-600 flex items-center  m-8 p-4 mr-28 rounded-full">
            <div className="inline mr-2 pl-4 font-semibold">
              Latest Collection
            </div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <img className="w-7/12 ml-40" src={hero_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

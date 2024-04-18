import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-between bg-gradient-to-t from-slate-50 to-blue-100">
      <div className="flex justify-center scale-150 font-semibold">
        <div>
        <h1 className="text-3xl mb-1">Exclusive</h1>
        <h1 className="text-3xl mb-1">Offers For You</h1>
        <p className="mb-2">ONLY ON BEST SELLERS PRODUCT</p>
        <button className="border p-5 pb-2 pt-2 text-slate-100 rounded-full bg-red-600">Check Now</button>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;

import React from "react";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const footer = () => {
  return (
    <div className="flex flex-col items-center scale-75 mt-14">
      <div className="flex items-center">
        <img src={footer_logo} alt="" />
        <p className="text-4xl font-semibold">SHOPPER</p>
      </div>
      <div className="flex gap-14 font-semibold mt-8">
        <p>Company</p>
        <p>Products</p>
        <p>Offices</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="flex gap-8 mt-12">
        <img src={instagram_icon} alt="" />
        <img src={pintester_icon} alt="" />
        <img src={whatsapp_icon} alt="" />
      </div>
      <hr className="mt-20 h-1 w-11/12 bg-slate-300" />
      <p className="p-5 text-xl font-normal">Copyright @ 2023 - All Right Reserved</p>
    </div>
  );
};

export default footer;

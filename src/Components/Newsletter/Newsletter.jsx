import React from "react";

const Newsletter = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-t from-slate-50 to-blue-100 pb-10" >
      <h1 className="text-4xl pb-5 pt-5 font-semibold">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="pb-4">Subscribe to our newletter and stay updated</p>
      <div className="w-1/3  border rounded-full p-3 h-12 flex items-center justify-between ">
        <input type="email" placeholder="Your Email id" className="border-none outline-none bg-transparent placeholder-slate-900 w-full" />
        <button className="rounded-full text-slate-200 bg-black p-3 -mr-3">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;

import React from "react";

const Loginsignup = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-t from-slate-50 to-pink-200 h-dvh">
      <div className="flex flex-col items-start mt-36 bg-slate-100 p-5 rounded-lg">
        <p className="text-2xl font-semibold mb-4">Sign Up</p>
        <input className="bg-transparent border rounded-md w-11/12 p-2 mb-3 outline-none" type="text" placeholder="Your Name" />
        <input
          className="bg-transparent border rounded-md w-11/12 p-2 mb-3 outline-none"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="bg-transparent border rounded-md w-11/12 p-2 mb-3 outline-none"
          type="password"
          placeholder="Passwoed"
        />
        <button className="w-11/12 bg-red-600 rounded-md p-2 text-xl font-medium mb-3">Continue</button>
        <p className="mb-1">
          Already have an account? <span className="text-red-600 font-medium">Login here</span>
        </p>
        <div className="flex gap-3 items-center justify-center text-sm font-light">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;

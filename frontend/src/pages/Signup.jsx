import React from "react";
import RethreadLogo from '../assets/RethreadLogo.webp'

const Signup = () => {
  return (
    <div className="h-full w-full p-2 grid">
      <h1 className="flex  items-center justify-center text-center font-heading mb-[10px]">
        <img className="h-[60px]"  src={RethreadLogo}  alt="rethread logo"/>
      </h1>
      <div className="w-full h-[450px] shadow-lg p-5 rounded-[10px]">
        <h1 className=" text-[1.5rem] text-heading font-bold mb-[10px]">Create Account</h1>
        <div className="grid gap-2  mb-[10px] text-[1.2rem]">
          <p className="grid gap-2">
            <label htmlFor="">Name</label>
            <input
              className="outline outline-2 outline-secondary rounded-[5px]"
              type="text"
            />
          </p>
          <p className="grid gap-2">
            <label htmlFor="">Email</label>
            <input
              className="outline outline-2 outline-secondary rounded-[5px]"
              type="text"
            />
          </p>
          <p className="grid gap-2">
            <label htmlFor="">Password</label>
            <input
              className="outline outline-2 outline-secondary rounded-[5px]"
              type="text"
            />
          </p>
          <p className="grid gap-2">
            <label htmlFor="">Confirm Password</label>
            <input
              className="outline outline-2 outline-secondary rounded-[5px]"
              type="text"
            />
          </p>

          <div>
            <button className="w-full h-[50px] bg-primary rounded-[15px] text-bold text-textDefault  mt-[10px]">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

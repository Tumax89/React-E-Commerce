import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-[50px] h-[50px] bg-slate-200 rounded-[50%] flex items-center justify-center absolute">
        <AiOutlineArrowLeft />
      </div>
      <div className="w-[50px] h-[50px] bg-slate-100 rounded-[50%] flex items-center justify-center absolute">
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default Slider;

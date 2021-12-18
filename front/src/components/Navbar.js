import React from "react";
import { GoSearch, GoMail } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="h-[60px] ">
      <div className="px-[10px] py-[20px] flex justify-between items-center">
        <div className="flex-1 flex items-center">
          <span className="text-[14px] cursor-pointer ">EN</span>
          <div className="flex border border-solid border-gray-300 ml-[25px] items-center">
            <input className="border-none focus:outline-none"></input>
            <GoSearch className="text-gray-400 text-[16px] " />
          </div>
        </div>
        <div className="flex-1 text-center">
          <h1 className="font-bold">Logo</h1>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="text-[14px] cursor-pointer ml-[25px]">REGISTER</div>
          <div className="text-[14px] cursor-pointer ml-[25px]">SIGN IN</div>
          <div className="text-[14px] cursor-pointer ml-[25px]">
            <GoMail className="text-2xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

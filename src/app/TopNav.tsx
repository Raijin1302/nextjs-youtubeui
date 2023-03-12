import React from "react";
import { BsYoutube } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
function TopNav() {
  return (
    <div className="flex justify-between border-2 border-red-400 p-4">
      <div className="flex items-center gap-6 ">
        <HiOutlineMenu size={26} />
        <div className="flex items-center gap-1">
          <BsYoutube size={30} className="text-red-500" />
          <span className="text-xl font-semibold">YouTube</span>
        </div>
      </div>
      <div className="border-2 border-blue-400">Search</div>
      <div className="border-2 border-green-400">User Menu</div>
    </div>
  );
}

export default TopNav;

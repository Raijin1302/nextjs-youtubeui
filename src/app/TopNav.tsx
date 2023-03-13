import React from "react";
import { BsYoutube, BsMicFill, BsBell, BsCameraVideo } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
function TopNav() {
  return (
    <div className="flex justify-between items-center border-2 border-red-400 p-4">
      <div className="flex items-center gap-6 ">
        <HiOutlineMenu size={26} />
        <div className="flex items-center gap-1">
          <BsYoutube size={30} className="text-red-500" />
          <span className="text-xl font-semibold">YouTube</span>
        </div>
      </div>
      <div className="md:flex hidden min-w-[300px] lg:w-[550px]">
        <div className="w-full flex">
          <input
            placeholder="Searching....!"
            className=" w-full px-4 py-2 text-zinc-200 bg-zinc-800 border-[1px] border-zinc-800 placeholder:text-zinc-500 rounded-tl-full rounded-bl-full focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
          <div className="bg-zinc-700 px-5 py-3 rounded-tr-full rounded-br-full">
            <BiSearch size={20} />
          </div>
        </div>
        <div className="ml-2 p-4 bg-zinc-800 rounded-full hover:bg-zinc-500 cursor-pointer ">
          <BsMicFill />
        </div>
      </div>

      <div className="border-2 border-green-400 flex gap-3">
        <div className="p-3 rounded-full hover:bg-zinc-500 cursor-pointer ">
          <BsBell size={22} />
        </div>
        <div className="p-3 rounded-full hover:bg-zinc-500 cursor-pointer ">
          <BsCameraVideo size={22} />
        </div>
        <div>
          <Image
            src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
            height={40}
            width={40}
            alt="user image"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default TopNav;

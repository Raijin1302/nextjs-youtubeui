"use client";
import React from "react";
import { IconType } from "react-icons/lib";
import { BiCodeAlt } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { TfiYoutube } from "react-icons/tfi";
import { BsCollectionPlay } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";
import Link from "next/link";
interface MenuItem {
  name: string;
  icon: IconType;
  pathname: string;
}

const MenuItem: Array<MenuItem> = [
  { name: "New", icon: HiHome, pathname: "/" },
  { name: "Coding", icon: BiCodeAlt, pathname: "/coding" },
  { name: "ReactJS", icon: BiCodeAlt, pathname: "/reactjs" },
  { name: "NextJS", icon: BiCodeAlt, pathname: "/nextjs" },
  {
    icon: TfiYoutube,
    name: "Shorts",
    pathname: "/shorts",
  },
  {
    icon: BsCollectionPlay,
    name: "Subscriptions",
    pathname: "/feed/subscriptions",
  },
  {
    icon: AiOutlineYoutube,
    name: "Originals",
    pathname: "/originals",
  },
  {
    icon: BiPlayCircle,
    name: "YouTube Music",
    pathname: "/music",
  },
];
function SideNav() {
  const pathname = usePathname();
  return (
    <div className="p-1 lg:px-2 xl:w-[200px] w-[100px]">
      {MenuItem.map((item) => (
        <Link key={item.name} href={item.pathname}>
          <div
            className={`flex flex-col xl:flex-row p-4 xl:py-3 gap-1 xl:gap-6 items-center hover:bg-zinc-700 rounded-md cursor-pointer ${
              item.pathname === pathname && "bg-zinc-600 "
            }`}
          >
            <item.icon size={25} />
            <span className="text-xs xl:text-start text-center">
              {item.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SideNav;

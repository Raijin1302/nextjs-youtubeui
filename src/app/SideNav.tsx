"use client";
import React from "react";
import { IconType } from "react-icons/lib";
import { BiCodeAlt } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { usePathname } from "next/navigation";
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
];
function SideNav() {
  const pathname = usePathname();
  return (
    <div className="p-1 lg:px-2  lg:w-[200px]">
      {MenuItem.map((item) => (
        <Link key={item.name} href={item.pathname}>
          <div className="flex flex-col lg:flex-row p-4 lg:py-3 gap-1 lg:gap-6 items-center hover:bg-zinc-700 hover:rounded-2xl">
            <item.icon size={25} />
            <span className="text-xs">{item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SideNav;

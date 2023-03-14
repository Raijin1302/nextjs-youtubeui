import React from "react";
import { IconType } from "react-icons/lib";
import { BiCodeAlt } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
interface MenuItem {
  name: string;
  icon: IconType;
}

const MenuItem: Array<MenuItem> = [
  { name: "New", icon: HiHome },
  { name: "Coding", icon: BiCodeAlt },
  { name: "ReactJS", icon: BiCodeAlt },
  { name: "NextJS", icon: BiCodeAlt },
];
function SideNav() {
  return (
    <div className="p-1">
      {MenuItem.map((item) => (
        <div
          key={item.name}
          className="flex flex-col lg:flex-row p-2 gap-1 items-center hover:bg-zinc-700 hover:rounded-xl"
        >
          <item.icon size={30} />
          <span className="text-xs">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default SideNav;

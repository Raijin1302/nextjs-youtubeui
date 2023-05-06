"use client"
import React from "react"
import { IconType } from "react-icons/lib"
import { BiCodeAlt } from "react-icons/bi"
import { HiHome } from "react-icons/hi"
import { usePathname } from "next/navigation"
import { TfiYoutube } from "react-icons/tfi"
import { BsCollectionPlay } from "react-icons/bs"
import { AiOutlineYoutube } from "react-icons/ai"
import { BiPlayCircle } from "react-icons/bi"
import Link from "next/link"
interface MenuItem {
  name: string
  icon: IconType
  pathname: string
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
]
function SideNav() {
  const pathname = usePathname()
  return (
    <div className=" container pt-24 xl:w-[200px] w-[95px] sm:flex hidden flex-col fixed left-0 top-0 h-screen bg-white dark:bg-slate-900 ">
      {MenuItem.map((item) => (
        <Link key={item.name} href={item.pathname}>
          <div
            className={`sm:flex hidden flex-col xl:flex-row p-4 xl:py-3 gap-1 xl:gap-6 items-center hover:bg-zinc-500 hover:dark:bg-zinc-700 rounded-md cursor-pointer font-medium text-slate-900 dark:text-slate-100 ${
              item.pathname === pathname && "bg-zinc-500 "
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
  )
}

export default SideNav

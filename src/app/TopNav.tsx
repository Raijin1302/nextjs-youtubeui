"use client"
import { useState } from "react"
import { BsYoutube, BsMicFill, BsBell, BsCameraVideo } from "react-icons/bs"
import { HiOutlineMenu } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Icons from "@/components/Icons"

import Button from "@/components/ui/Button"
import ThemeToggle from "@/components/ThemeToggle"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar"
import Searchbar from "@/components/Searchbar"
function TopNav() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  return (
    <div className="flex justify-between items-center fixed backdrop-blur-sm z-50 top-0 inset-x-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm  bg-white dark:bg-slate-900 ">
      <div className="container max-w-full mx-auto w-full flex justify-between items-center">
        <div className="flex items-center gap-6 ">
          <Icons.Menu className="relative flex h-6 w-6 dark:text-slate-200" />
          <div className="flex items-center gap-1">
            <Icons.Youtube className="dark:text-slate-200" />
            <span className="text-xl font-semibold text-black dark:text-white">
              YouTube
            </span>
          </div>
        </div>
        <div className="md:flex hidden min-w-[300px] lg:w-[550px]">
          <Searchbar />
          <div className="ml-2 p-4 bg-zinc-800 rounded-full hover:bg-zinc-500 cursor-pointer ">
            <BsMicFill />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="p-3 rounded-full hover:bg-zinc-500 cursor-pointer ">
            <BsBell size={22} />
          </div>
          <div className="p-3 rounded-full hover:bg-zinc-500 cursor-pointer ">
            <BsCameraVideo size={22} />
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ThemeToggle />
          <Button>Sign In</Button>
        </div>
      </div>
    </div>
  )
}

export default TopNav

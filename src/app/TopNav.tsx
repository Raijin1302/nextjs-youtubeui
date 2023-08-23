"use client"
import { useState } from "react"
import { BsYoutube, BsMicFill, BsBell, BsCameraVideo } from "react-icons/bs"
import { HiOutlineMenu } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Icons from "@/components/Icons"
import Button, { buttonVariants } from "@/components/ui/Button"
import ThemeToggle from "@/components/ThemeToggle"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/HoverCard"
import Link from "next/link"
import SearchFind from "@/components/SearchFind"
import { Bell, Video } from "lucide-react"
function TopNav() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  return (
    <div className="fixed backdrop-blur-sm top-0 inset-x-0 h-fit border-b border-slate-300 dark:border-slate-700 shadow-sm  bg-white dark:bg-slate-900 z-[10] py-3 ">
      <div className="container max-w-full mx-auto h-full flex justify-between items-center gap-2">
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
          {/* <Searchbar /> */}
          <SearchFind />
          <div className="ml-2 p-4 bg-zinc-800 rounded-full hover:bg-zinc-500 cursor-pointer ">
            <BsMicFill />
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <HoverCard>
            <HoverCardTrigger className="p-3 rounded-full hover:bg-zinc-500 cursor-pointer ">
              <Bell className="mr-2 h-4 w-4" />
            </HoverCardTrigger>
            <HoverCardContent>Notifications</HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger className="p-3 rounded-full hover:bg-zinc-500 cursor-pointer ">
              <Video className="mr-2 h-4 w-4" />
            </HoverCardTrigger>
            <HoverCardContent>Create</HoverCardContent>
          </HoverCard>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ThemeToggle />
          <Link href="/login" className={buttonVariants()}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopNav

import { FC } from "react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/Button"
import Icons from "@/components/Icons"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="absolute inset-0 mx-auto container flex h-screen flex-col items-center justify-center ">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg ">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link
            href="/"
            className={buttonVariants({
              variant: "default",
              className: "w-fit",
            })}
          >
            <Icons.ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <h2>Welcome back !</h2>
          <p>Please sign in using your social account</p>
        </div>
      </div>
    </div>
  )
}

export default page

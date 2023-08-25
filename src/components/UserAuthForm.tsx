"use client"
import { FC, useState } from "react"
import Icons from "./Icons"
import Button from "./ui/Button"
import { signIn } from "next-auth/react"
import { toast } from "./ui/Toast"
import { cn } from "@/lib/utils"
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const loginWithGithub = async () => {
    setIsLoading(true)
    try {
      await signIn("github")
    } catch (error) {
      toast({
        title: "There was a problem.",
        message: "There was a error login Google",
        type: "error",
      })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div
      className={cn("flex flex-col justify-center gap-5", className)}
      {...props}
    >
      <Button size="sm" className="w-full">
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
      <Button
        onClick={loginWithGithub}
        isLoading={isLoading}
        size="sm"
        className="w-full"
      >
        {isLoading ? null : <Icons.github className="mr-2 h-4 w-4" />}
        Github
      </Button>
    </div>
  )
}

export default UserAuthForm

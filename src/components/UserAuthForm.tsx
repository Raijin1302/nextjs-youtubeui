import { FC } from "react"
import Icons from "./Icons"
import Button from "./ui/Button"
interface UserAuthFormProps {}

const UserAuthForm: FC<UserAuthFormProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <Button size="sm" className="w-full">
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
      <Button size="sm" className="w-full">
        <Icons.github className="mr-2 h-4 w-4" />
        Github
      </Button>
    </div>
  )
}

export default UserAuthForm

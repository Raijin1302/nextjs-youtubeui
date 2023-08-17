"use client"
import { FC, useCallback, useEffect, useRef, useState } from "react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/Command"
import { usePathname, useRouter } from "next/navigation"
import { Users } from "lucide-react"
interface SearchFindProps {}

const SearchFind: FC<SearchFindProps> = ({}) => {
  //   const [input, setInput] = useState<string>("")
  //   const router = useRouter()
  //   const request = debounce(() => {
  //     refetch()
  //   }, 500)
  //   const debounceRequest = useCallback(() => {
  //     request()
  //   }, [request])
  //   const {
  //     data: queryResults,
  //     isFetched,
  //     refetch,
  //     isFetching,
  //   } = useQuery({
  //     queryFn: async () => {
  //       if (!input) return []
  //       const { data } = await axios.get(`/api/search?q=${input}`)
  //       return data as (Subreddit & {
  //         _count: Prisma.SubredditCountOutputType
  //       })[]
  //     },
  //     queryKey: ["search-query"],
  //     enabled: false,
  //   })
  //   const commandRef = useRef<HTMLDivElement>(null)
  //   const pathName = usePathname()
  //   useOnClickOutside(commandRef, () => {
  //     setInput("")
  //   })

  //   useEffect(() => {
  //     setInput("")
  //   }, [pathName])
  return (
    <Command className="relative rounded-lg border max-w-lg z-50 overflow-visible">
      <CommandInput
        className="outline-none border-none focus:border-none focus:outline-none ring-0"
        placeholder="Search communities..."
      />

      <CommandList className="absolute bg-white top-full inset-x-0 shadow rounded-b-md">
        <CommandGroup heading="Communites">
          <CommandItem key="1223" value="4456">
            <Users className="mr-2 h-4 w-4" />
            <a href="/">r/a</a>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}

export default SearchFind

"use client"
import { FC, useState } from "react"
interface SearchbarProps {}

const Searchbar: FC<SearchbarProps> = ({}) => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  console.log(searchTerm)
  const searchingWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }
  return (
    <div className="relative w-full" data-te-input-wrapper-init="">
      {/* <div className="w-full flex">
            <input
              placeholder="Searching....!"
              className=" w-full px-4 py-2 text-zinc-200 bg-zinc-800 border-[1px] border-zinc-800 placeholder:text-zinc-500 rounded-tl-full rounded-bl-full focus:outline-none focus:ring-1 focus:ring-sky-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="bg-zinc-700 px-5 py-3 rounded-tr-full rounded-br-full">
              <BiSearch size={20} />
            </div>
          </div> */}
      <input
        type="search"
        className="peer block min-h-[auto] w-full px-4 py-2 rounded bg-transparent leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleSearch2"
        value={searchTerm}
        onChange={searchingWord}
        placeholder="Type query"
      />
      <label
        htmlFor="exampleSearch2"
        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
      >
        Search
      </label>
    </div>
  )
}

export default Searchbar

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Combobox from "./Combobox"
import SearchImg from "../assets/search.svg"
import { useRef } from "react"


const Searchbar = () => {
  
  const inputRef = useRef<HTMLInputElement>(null)

  function clickImg() {
    inputRef.current?.focus()
  }

  return (
    <div className="bg-primary p-3 flex flex-col max-w-sm mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-7xl xl:mx-0 rounded-lg my-4">
      <div className="flex flex-col gap-y-12 md:gap-y-0 md:flex-row my-4">
        <div className="flex flex-col flex-1 justify-center items-center">
          <h1 className="text-4xl text-white font-bold pl-3"> Search for something? </h1>
          {/* <p className="pl-3 text-sm text-white mb-5"> </p> */}
        </div>
        <div className="flex flex-1 mb-8 justify-start">
          <img src={SearchImg} alt="search" onClick={() => clickImg()} className="w-[350px] bg-white p-3 cursor-pointer rounded-lg" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-4 py-4 items-center">
        <Combobox />
        <Input ref={inputRef} className="input-neutral w-full max-w-sm md:max-w-md" placeholder="Search something..." id="search" type="text" />
        <Button className="bg-white text-black hover:text-white"> Search </Button>
      </div>
    </div>
  )
}

export default Searchbar
import { Input } from "@/components/ui/input"
import { isLoggedIn } from "@/utils/verifyloggedin"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

  const [name, setName] = useState<string>("")

  useEffect(() => {
    const isLoggedInVar = isLoggedIn()
    const named = localStorage.getItem("name")
    setName(isLoggedInVar ? named as string : "Login/register")
  }, [])

  console.log(name)



  return (
    <div className="flex p-2 font-extralight items-center justify-center md:justify-start bg-primary text-white">
        <div className="hidden md:flex">
            <Link to="/">
                <p className="text-2xl font-bold cursor-pointer lg:pl-12"> AuctionsHere </p>
            </Link>
        </div>
        <div className="flex items-center flex-row w-full justify-center gap-4 bg-primary">
            <Input type="text" placeholder="Search for something..." className="text-black max-w-[200px] sm:max-w-sm md:max-w-md" />
            <Link to="/auctions">
            <p className="cursor-pointer"> Auctions </p>
            </Link>
            
           <Link to={name === "Login/register" ? "/sign" : "/profile"}>
            <p className="cursor-pointer"> {name} </p>
           </Link>
        </div>
    </div>
  )
}

export default Navbar
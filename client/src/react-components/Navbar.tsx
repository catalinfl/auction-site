import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex p-2 font-extralight items-center justify-center md:justify-start bg-primary text-white">
        <div className="hidden md:flex">
            <Link to="/">
                <p className="text-2xl font-bold cursor-pointer"> AuctionsHere </p>
            </Link>
        </div>
        <div className="flex items-center flex-row w-full justify-center gap-4 bg-primary">
            <Input type="text" placeholder="Search for something..." className="text-black max-w-[200px] sm:max-w-sm md:max-w-md" />
            <Link to="/auctions">
            <p className="cursor-pointer"> Auctions </p>
            </Link>
            <Link to="/sign">
            <p className="cursor-pointer"> Login or register </p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
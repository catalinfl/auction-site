import { Button } from "@/components/ui/button"
import Search from "../assets/login.svg"
import { MoveLeft, MoveRight } from "lucide-react"
import { Slider } from "@/components/ui/slider"

const AuctionInfo = () => {
  return (
    <div className="max-w-7xl lg:grid lg:gap-12 lg:grid-cols-5 p-6 my-12 lg:my-0 lg:p-3 flex-row bg-white h-[750px] mx-auto">
        <div className="max-w-5xl col-span-3 flex flex-row justify-center items-center w-full bg-white">
                <MoveLeft className="cursor-pointer text-white bg-primary p-3 rounded-md" size="50" />
                <div className="w-full cursor-pointer">
                    <img src={Search} />
                </div>
                <MoveRight className="cursor-pointer text-white bg-primary p-3 rounded-md" size="50" />
        </div>
        <div className="flex col-span-2 flex-col">
                <h1 className="text-3xl text-center font-extralight text-primary"> Patrunjel </h1>
                <p className="text-wrap mt-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cumque soluta tempora veniam accusamus quisquam minima doloremque voluptatum labore. Sint culpa maxime enim dolorum quos blanditiis velit dolorem laboriosam id? </p>
                <div className="flex flex-col mt-3">
                    <div className="flex flex-col mt-4">
                        <p className="text-sm line-through font-bold text-right"> Starting price: 100$ </p>
                        <p className="font-bold text-primary text-2xl text-right"> Current price: 150$ </p>
                    </div>
                    <div className="flex flex-col mt-4">
                        <p className="font-bold"> Time left: <span className="font-bold text-primary"> 1h 30m </span> </p>
                        <p> Bids: <span className="font-bold text-primary"> 10 </span> </p>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center mt-12">
                    <Slider className="w-[300px] h-12 cursor-pointer"/>
                    <p> Currently, your bid is 1000 lei. </p>
                    <Button className="w-32 mt-16"> Bid now </Button>
                </div>
        </div>
    </div>
)
}

export default AuctionInfo
import { Button } from '@/components/ui/button'
import AddToCartImg from '../assets/addtocart.svg'
import Typewriter from "typewriter-effect"
import { Link } from 'react-router-dom'

const HomeContainer = () => {
  return (
    <div className="flex items-center justify-center lg:mt-12">
      <div className="rounded-lg gap-5 lg:flex-row bg-primary h-[600px] flex w-full flex-col items-center max-w-sm lg:mx-0 md:max-w-xl lg:max-w-4xl xl:max-w-7xl mt-3 p-3 text-white mx-auto">
        <div className="flex md:flex-1 justify-around w-full">
          <h1 className="font-bold text-center w-full text-3xl lg:text-5xl p-3 bg-gradient-to-r from-white to-orange-400 inline-block text-transparent bg-clip-text">
            <Typewriter
            options={{
              strings: ['Buy in auction a chair', 'Sell something', 'Buy an valuable object',
                'Sell an object'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
            }}
            // onInit={(typewriter) => {
            //   typewriter
            //   .pauseFor(15000)
            // }}
            />
            <div className="flex flex-col md:flex-row items-center mt-16 gap-5 mx-auto justify-center w-full">
            <Link to="/auctions">
              <Button className="w-64 hover:bg-foreground md:mt-16 font-bold bg-white text-primary"> Bid for something </Button>
            </Link>
            <Button className="w-64 hover:bg-foreground md:mt-16 font-bold bg-white text-primary"> Sell something </Button>
            </div>
          </h1>
        </div>
        <div className="flex flex-1 mt-3 p-3 rounded-lg bg-white ">
          <img src={AddToCartImg} className="w-[700px]" />
        </div>
      </div>
    </div>
  )
}

export default HomeContainer
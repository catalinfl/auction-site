import Footer from '@/react-components/Footer'
import Navbar from '@/react-components/Navbar'
import SignCard from '@/react-components/SignCard'
import LoginImg from "../assets/login.svg"

const Sign = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="flex md:mt-4 xl:mt-12 items-center flex-col md:flex-row w-full justify-center gap-8">
          <SignCard isRegister={true}/>
          <SignCard isRegister={false}/>
      </div>
      <img src={LoginImg} className="w-[300px] mr-8  md:mr-12 md:w-[400px] self-center mt-7 pb-12"/>
      <Footer isHeightBigger />
    </div>
  )
}

export default Sign
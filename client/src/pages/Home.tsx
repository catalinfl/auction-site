import BreadcrumbComp from '@/react-components/BreadcrumbComp'
import HomeContainer from '@/react-components/HomeContainer'
import Navbar from '@/react-components/Navbar'

const Home = () => {


  return (
    <>
        <Navbar />
        <div className="w-full max-w-7xl mx-auto">
            <BreadcrumbComp home={true} search={false} auction={false}/>
        </div>
        <HomeContainer />
        {/* <Footer isHeightBigger={false} /> */}
    </>
  )
}

export default Home
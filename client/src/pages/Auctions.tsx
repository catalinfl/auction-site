import BreadcrumbComp from '@/react-components/BreadcrumbComp'
import Footer from '@/react-components/Footer'
import ItemsComponent from '@/react-components/ItemsComponent'
import Navbar from '@/react-components/Navbar'

const Auctions = () => {
  return (
    <> 
        <Navbar />
        <div className="w-full max-w-7xl mx-auto">
            {/* <div className="md:max-w-3xl flex flex-col my-3 border rounded-lg p-3"> */}
            <BreadcrumbComp/>
            {/* </div> */}
            <ItemsComponent backgroundHighlight={true} title={"Promoted auctions..."} description='' />
            <ItemsComponent backgroundHighlight={false} title={"Auctions that starts soon."} description='Wait till the auction will start' />
        </div>
        <Footer isHeightBigger={false} />
    </>
)
}

export default Auctions
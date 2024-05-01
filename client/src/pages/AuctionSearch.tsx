import BreadcrumbComp from '@/react-components/BreadcrumbComp'
import Footer from '@/react-components/Footer'
import Navbar from '@/react-components/Navbar'
import SearchCardComponents from '@/react-components/SearchCardComponents'
import SearchInfo from '@/react-components/SearchInfo'
import Settings from '@/react-components/Settings'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const AuctionSearch = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ['auctions'],
    queryFn: () =>
      axios.get('http://localhost:8080/api/category')
          .then((res) => res.data)
          .catch((err) => console.log(err))
    });

  console.log(data)  


  return (
    <>
        <Navbar />
          <div className="w-full max-w-7xl mx-auto">
              <BreadcrumbComp search={true} home={true} auction={false}/>
          </div>
          <div className="lg:grid lg:grid-cols-5">
              <Settings />
              <div className="col-span-4">
                <SearchInfo />
                <SearchCardComponents />
              </div>
          </div>
        <Footer isHeightBigger={false} />
    </>
  )
}

export default AuctionSearch
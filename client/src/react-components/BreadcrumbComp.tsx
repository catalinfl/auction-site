import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Link } from "react-router-dom"
import { RiAuctionLine } from "react-icons/ri";
import { Home } from "lucide-react";
import { Search } from "lucide-react";

interface BreadcrumbComp {
  search: boolean
}

const BreadcrumbComp = ({search}: BreadcrumbComp) => {
  return (
  <Breadcrumb className="w-full content-center self-center max-w-sm mx-auto lg:mx-0 md:max-w-xl lg:max-w-4xl xl:max-w-7xl rounded-sm p-2 my-3">
    <BreadcrumbList> 
      <Link to="/">
      <div className="flex flex-row  items-center">
      <BreadcrumbItem>
        <BreadcrumbLink className="justify-center items-center flex gap-2"><Home size="17" /> Home</BreadcrumbLink>
      </BreadcrumbItem>
      </div>
      </Link>
      { !search ?
       <Link to="/auctions">
        <div className="flex flex-row gap-2 items-center">
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="justify-center items-center text-black flex gap-2"><RiAuctionLine size="18"/> Auctions</BreadcrumbPage>
        </BreadcrumbItem>
      </div>
      </Link>
      : <>
      
      <Link to="/auctions">
        <div className="flex flex-row gap-2 items-center">
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="justify-center items-center text-[gray] flex gap-2"><RiAuctionLine size="18"/> Auctions</BreadcrumbPage>
        </BreadcrumbItem>
      </div>
      </Link>
      <div className="flex flex-row gap-2 items-center">
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="justify-center items-center text-black flex gap-2"><Search size="18"/> Search</BreadcrumbPage>
        </BreadcrumbItem>
      </div>
      </>
      }
  </BreadcrumbList>
  </Breadcrumb>
  )
}

export default BreadcrumbComp
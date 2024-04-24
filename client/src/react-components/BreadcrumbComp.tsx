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

const BreadcrumbComp = () => {
  return (
  <Breadcrumb className="w-full max-w-sm mx-auto lg:mx-0 md:max-w-xl lg:max-w-4xl xl:max-w-7xl rounded-sm p-2 my-3">
    <BreadcrumbList> 
      <BreadcrumbItem>
      <Link to="/">
        <BreadcrumbLink className="justify-center items-center flex gap-2"><Home size="18" /> Home</BreadcrumbLink>
      </Link>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage className="justify-center items-center flex gap-2"><RiAuctionLine size="18"/> Auctions</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
  )
}

export default BreadcrumbComp
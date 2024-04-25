import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

const SearchInfo = () => {
  return (
    <div className="flex h-[50px] justify-between w-full max-w-5xl mt-3 p-3 mx-auto text-white border-primary border-b-2">
        <div className="flex font-bold justify-center items-center">
            <p className="font-bold text-xl text-black"> 1.215 items </p>
        </div>
        <div className="flex flex-row items-center text-black gap-3">
            <p className="font-extralight text-black"> Sort by price: </p>
            <Select>
            <SelectTrigger className="w-[180px] h-8">
                <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="low">Low to high</SelectItem>
                <SelectItem value="high">High to low</SelectItem>
            </SelectContent>
            </Select>
        </div>
    </div>
)
}

export default SearchInfo
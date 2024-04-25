import { Slider } from "@/components/ui/slider"
import { DollarSignIcon } from "lucide-react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRef } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const Settings = () => {

  return (
    <div className="col-span-1 flex gap-y-4 flex-col h-[300px] justify-center ml-12 text-black rounded-lg p-3">
        <div className="flex flex-row mb-4 lg:mr-4 justify-center items-center gap-4">
            <DollarSignIcon color="white" size="36" className="rounded-full bg-primary"/>
            <p className="text-sm md:text-md"> 500 - 2000 	&#x20AC;</p>
        </div>
        <div className="w-[70%] md:w-[30%] lg:w-[100%] mx-auto">
        <Slider defaultValue={[10]} max={10000} step={1000} className="cursor-pointer" />
        <p className="text-center my-3 text-sm"> Choose maximum price </p>
        </div>
        <div className="ml-6 flex flex-col">
        <RadioGroup className="w-full">
            <div className="flex items-center space-x-2 cursor-pointer">
                <RadioGroupItem value="option-maxprice" id="option-maxprice" />
                <Label defaultChecked htmlFor="option-maxprice" className="cursor-pointer font-thin"> Minimum price </Label>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
                <RadioGroupItem value="option-minprice" id="option-minprice" />
                <Label htmlFor="option-minprice" className="cursor-pointer font-thin"> Maximum price </Label>
            </div>
        </RadioGroup>
        <Select>
            <div className="w-full gap-4 justify-center items-center flex mt-6">
                <p className="text-sm "> Category </p>
                <SelectTrigger className="w-[150px] flex items-center mr-6">
                    <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all"> All </SelectItem>
                    <SelectItem value="books"> Books </SelectItem>
                    <SelectItem value="art"> Art </SelectItem>
                    <SelectItem value="furniture"> Furniture </SelectItem>
                    <SelectItem value="jewelry"> Jewelry </SelectItem>
                </SelectContent>
            </div>
        </Select>
        </div>
    </div>
)
}

export default Settings
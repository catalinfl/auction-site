import ImageLog from "@/assets/login.svg"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
  

interface CardCompProps {
    title: string,
    description: string,
    image: string,
    price: number
}

const CardComp = () => {
  return (
    <Card className="w-[300px] h-[400px] rounded-none shadow shadow-primary">
        <CardHeader>
            <CardTitle> Scrisoare catre Berlin </CardTitle>
            <CardDescription> Starts in 3h 20m 2s... </CardDescription>
        </CardHeader>
        <CardContent>
            <img src={ImageLog} />
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
            <CardDescription className=" w-full flex justify-end text-xs"> Start price is 1000 RON </CardDescription>
            <Button> See the auction </Button>
        </CardFooter>
    </Card>

  )
}

export default CardComp
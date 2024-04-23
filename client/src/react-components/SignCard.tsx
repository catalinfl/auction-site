import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SignCardProps {
  isRegister?: boolean
}

export default function SignCard({ isRegister }: SignCardProps) {
  return (
    <Card className="max-w-xs mt-4 md:mt-0 w-full md:max-w-sm shadow-md transition-all hover:shadow-primary">
      <CardHeader>
        <CardTitle>{isRegister ? "Participate in auctions." : "Login to join our platform." }</CardTitle>
        <CardDescription> {isRegister ? "Register to have access to auctions" : "Participate in auctions or create one"} </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-3.5">
              <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="mb">Name</Label>
              <Input id="name" placeholder="Your name..." />
              </div>
              {
                isRegister ? (
                  <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="mb">Email</Label>
                  <Input id="name" type="email" placeholder="Email" pattern=".+@example\.com" required />
                  </div>
                ) : null
              }
              <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="mb">Password</Label>
              <Input type="password" id="name" placeholder="Password" />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className={`${!isRegister ? "mt-[4.7rem]" : null} flex justify-center`}>
        <Button className="w-32">{isRegister ? "Register" : "Login"}</Button>
      </CardFooter>
    </Card>
  )
}

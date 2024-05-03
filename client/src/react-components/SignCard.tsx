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
import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import { ChangeEvent, useEffect, useState } from "react"

interface SignCardProps {
  isRegister?: boolean
}

type SignCardType = {
  username: string,
  email: string,
  password: string
}

type LoginCardType = Omit<SignCardType, "email">



export default function SignCard({ isRegister }: SignCardProps) {

  const [signCard, setSignCard] = useState<SignCardType>({
    username: "",
    email: "",
    password: ""
  })

  const [loginCard, setLoginCard] = useState<LoginCardType>({
    username: "",
    password: ""
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    
    if (isRegister) {
      const { name, value } = e.target
  
      setSignCard(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
    
    else {
      const { name, value } = e.target
  
      setLoginCard(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  console.log(loginCard, signCard)


  useEffect(() => {
    console.log(signCard)
  })

  const [error, setError] = useState<string>("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError("")
    
    }, 5000)

    return () => clearTimeout(timeout)

  }, [error])


  console.log(error)
  
  const registerUser = useMutation({
    mutationFn: () => axios.post("http://localhost:8080/api/user/register", JSON.stringify(signCard))
    .then((res) => console.log(res.data))
    .catch((err: AxiosError) => setError(err?.response?.data as string))
    ,
    onMutate: () => console.log("User registration in progress"),
    onSuccess: () => console.log("User registered successfully"),
    onError: () => console.log("User registration failed")
  })

  useEffect(() => {
    console.log(loginCard)
  })

  const verifyToken = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/user/verify", { withCredentials: true })
      localStorage.setItem("name", res.data.username)
      var date = new Date()
      date.setDate(date.getDate() + 1)
      localStorage.setItem("date", date.toISOString())
    }
    catch(err) {
      localStorage.setItem("name", "")
    }
  }


  const loginUser = useMutation({
    mutationFn: () => axios.post("http://localhost:8080/api/user/login", JSON.stringify(loginCard), { withCredentials: true })
    // .then((res) => console.log(res.data))
    .then(() => verifyToken())
    .then(() => window.location.href = "/auctions")
    .catch((err) => console.log(err))

    ,
    onMutate: () => console.log("User login in progress"),
    onSuccess: () => console.log("User logged in successfully"),
    onError: () => console.log("User login failed")
  })


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
              <Label htmlFor="username" className="mb">Name</Label>
              <Input name="username" onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} id="username" placeholder="Your name..." />
              </div>
              {
                isRegister ? (
                  <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="mb">Email</Label>
                  <Input name="email" onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} id="email" type="email" placeholder="Email" pattern=".+@example\.com" required />
                  </div>
                ) : null
              }
              <div className="flex flex-col gap-2">
              <Label htmlFor="password" className="mb">Password</Label>
              <Input name="password" onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} type="password" id="password" placeholder="Password" />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className={`${!isRegister ? "mt-[4.7rem]" : null} flex justify-center`}>
        <Button onClick={() => isRegister ? registerUser.mutate() : loginUser.mutate() } className="w-32">{isRegister ? "Register" : "Login"}</Button>
      </CardFooter>
    </Card>
  )
}

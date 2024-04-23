import { useEffect } from "react"

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {

    useEffect(() => {
      document.documentElement.classList.add('light')
    }, [])
  
    return children
  }


export default ThemeWrapper
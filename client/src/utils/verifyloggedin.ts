export const isLoggedIn = () => {
  const token = localStorage.getItem("name")
  if (!token) {
    return false
  }
  const date = localStorage.getItem("date")
  if (date) {
    const currentDate = new Date()
    const storedDate = new Date(date)

    if (storedDate.getTime() - currentDate.getTime() > 0) {
      return true
    } else {
      localStorage.removeItem("token")
      localStorage.removeItem("date")
      return false
    }
  }

  return false
}
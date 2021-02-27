import { useContext } from "react"
import { CountdownContext } from "../contexts/CountdownContex"

export function useCountdown() {
  const context = useContext(CountdownContext)

  return context
}
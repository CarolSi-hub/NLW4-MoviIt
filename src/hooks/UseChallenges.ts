import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallangesContext"

export function useChallenges() {
  const context = useContext(ChallengesContext)

  return context
}
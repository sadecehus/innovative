import type React from "react"
interface CarProps {
  children: React.ReactNode
}

export default function Car({ children }: CarProps) {
  return <>{children}</>
}

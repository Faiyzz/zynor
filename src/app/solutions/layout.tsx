import type { ReactNode } from "react"
import ServicesAndWork from "../components/ServicesAndWork"

export default function SolutionsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
 
      

     
      <main className="flex-1">{children}</main>

     <ServicesAndWork/>
     
    </div>
  )
}

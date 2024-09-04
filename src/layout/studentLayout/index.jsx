import { Outlet } from "react-router-dom"
import { StudentSidebar } from "../../components"

export const StudentLayout = () => {
  return (
    <main className="flex  flex-wrap sm:flex-nowrap overflow-hidden h-screen">
      <StudentSidebar />
      <Outlet />
    </main>
  )
}

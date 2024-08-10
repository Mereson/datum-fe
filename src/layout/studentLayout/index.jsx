import { Outlet } from "react-router-dom"
import { StudentSidebar } from "../../components"

export const StudentLayout = () => {
  return (
    <main className="flex overflow-hidden h-screen">
      <StudentSidebar />
      <Outlet />
    </main>
  )
}

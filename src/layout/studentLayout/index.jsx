import { Outlet } from "react-router-dom"
import { StudentSidebar } from "../../components"

export const StudentLayout = () => {
  return (
    <>
      <StudentSidebar />
      <Outlet />
    </>
  )
}

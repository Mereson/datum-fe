import { Outlet } from "react-router-dom"
import { TeacherSidebar } from "../../components"

export const TeacherLayout = () => {
  return (
    <section className="overflow-hidden h-screen flex">
      <TeacherSidebar />
      <Outlet />
    </section>
  )
}
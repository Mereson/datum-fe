import { Outlet } from "react-router-dom"
import { AdminSidebar } from "../../components"

export const AdminLayout = () => {
  return (
    <main className="flex overflow-hidden h-screen">
      <AdminSidebar />
      <Outlet />
    </main>
  )
}

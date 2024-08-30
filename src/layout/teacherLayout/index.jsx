import { Outlet } from "react-router-dom"
import { TeacherSidebar } from "../../components"
import style from "./styles.module.css"

export const TeacherLayout = () => {
  return (
    <section className={style.teacher_layout}>
      <TeacherSidebar />
      <Outlet />
    </section>
  )
}

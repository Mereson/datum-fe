import { useState } from "react"
import style from "./styles.module.css"
import { Link, useNavigate } from "react-router-dom"
import { datumLogoWhite } from "../../../assets/icons/teacherSidebar"
import { SidebarNavItem } from "../sidebarNav"
import { IoMdMenu } from "react-icons/io"
import {
  DashboardIcon,
  SbAttendance,
  SbLogout,
  TotalStudents,
} from "../../../assets"
import { LogOutNavItem } from "../logOutNav"
import { useToken } from "../../../states/students"
import TableIcon from "../../../assets/icons/teacherSidebar/table"
import KyberIcon from "../../../assets/icons/teacherSidebar/kyber"
import CalendarIcon from "../../../assets/icons/teacherSidebar/calendar"

export const TeacherSidebar = () => {
  const { clearToken } = useToken()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const logOut = () => {
    clearToken()
    // clearStudentsData()
    navigate("/")
  }

  return (
    <aside className=" pl-6 pb-7 w-full sm:w-[250px]">
      <div className={`${style.brand} flex justify-between pr-6`}>
        <Link className="pt-8 flex items-center w-1/2 gap-1 pb-[63px]" to={"/"}>
          <img
            src={datumLogoWhite}
            className="h-[23px] w-[120]"
            alt="datum logo"
          />
        </Link>

        <div className={`${style.menu} `}>
          <IoMdMenu
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          />
        </div>
      </div>

      <div className={menuOpen ? "" : `${style.open}`}>
        <nav className={`${style.side_navbar}`}>
          <div className="h-[80%] pb-6 flex flex-col justify-between">
            <div className="flex flex-col gap-4 lg:gap-0">
              <div
                onClick={() => {
                  setMenuOpen(!menuOpen)
                }}
              >
                <SidebarNavItem
                  to="/teacher/dashboard"
                  Icon={DashboardIcon}
                  label={"Dashboard"}
                />
              </div>
              <div
                onClick={() => {
                  setMenuOpen(!menuOpen)
                }}
              >
                <SidebarNavItem
                  to={"/teacher/students"}
                  Icon={TotalStudents}
                  label={"Students"}
                />
              </div>

              <div
                onClick={() => {
                  setMenuOpen(!menuOpen)
                }}
              >
                <SidebarNavItem
                  to={"/teacher/uploadresult"}
                  Icon={SbAttendance}
                  label={"Result"}
                />
              </div>

              <div
                onClick={() => {
                  setMenuOpen(!menuOpen)
                }}
              >
                <SidebarNavItem
                  to={"/teacher/attendance"}
                  Icon={CalendarIcon}
                  label={"Attendance"}
                />
              </div>

              <div
                onClick={() => {
                  setMenuOpen(!menuOpen)
                }}
              >
                <SidebarNavItem
                  to={"/teacher/timetable"}
                  Icon={TableIcon}
                  label={"Timetable"}
                />
              </div>

              <div
                onClick={() => {
                  setMenuOpen(!menuOpen)
                }}
              >
                <SidebarNavItem
                  to={"/teacher/schemeOfWork"}
                  Icon={KyberIcon}
                  label={"Scheme Of Work"}
                />
              </div>
              <hr className="mt-3" />
            </div>

            <div className="pt-11">
              <LogOutNavItem onClick={logOut} Icon={SbLogout} label="Log out" />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}

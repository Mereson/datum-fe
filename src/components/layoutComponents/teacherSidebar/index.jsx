import { useState } from "react"
import style from "./styles.module.css"
import { Link } from "react-router-dom"
import { datumLogoWhite } from "../../../assets/icons/teacherSidebar"
import { SidebarNavItem } from "../sidebarNav"
import { IoMdMenu } from "react-icons/io"
import {
  DashboardIcon,
  ParentsIcon,
  SbAttendance,
  SbLogout,
  TeachersIcon,
  TotalStudents,
} from "../../../assets"

export const TeacherSidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  // const [showMenu, setShowMenu] = useState(true)

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
                  Icon={SbAttendance}
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
                  Icon={TeachersIcon}
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
                  Icon={ParentsIcon}
                  label={"Scheme Of Work"}
                />
              </div>
              <hr className="mt-3" />
            </div>

            <div className="pt-11">
              <SidebarNavItem to={"/"} Icon={SbLogout} label="Log out" />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}

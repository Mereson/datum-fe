import { Link } from "react-router-dom"
import { datumLogoWhite } from "../../../assets/icons/teacherSidebar"
import { SidebarNavItem } from "../sidebarNav"
import { ParentsIcon, SbAttendance, SbHome, SbLogout, StudentIcon, TeachersIcon } from "../../../assets"

export const TeacherSidebar = () => {
  return (
    <aside className="h-[100vh] w-[250px] pl-6 pb-7 bg-[#132985] flex flex-col justify-between">
      <div>
        <Link className="pt-8 flex items-center gap-1" to={"/"}>
          <img
            src={datumLogoWhite}
            className="h-[23px] w-[120]"
            alt="datum logo"
          />
        </Link>
        <div className="pt-[70px] flex flex-col gap-6 w-full">
          <div className="flex flex-col w-full">
            <SidebarNavItem
              to="/teacher/dashboard"
              Icon={SbHome}
              label={"Dashboard"}
            />
            <SidebarNavItem
              to={"/teacher/students"}
              Icon={StudentIcon}
              label={"Students"}
            />
            <SidebarNavItem
              to={"/teacher/attendance"}
              Icon={SbAttendance}
              label={"Attendance"}
            />
            <SidebarNavItem
              to={"/teacher/timetable"}
              Icon={TeachersIcon}
              label={"Timetable"}
            />

            <SidebarNavItem
              to={"/teacher/schemeOfWork"}
              Icon={ParentsIcon}
              label={"Scheme Of Work"}
            />
            <hr className="" />
          </div>
        </div>
      </div>
      <div className="pt-11">
        <SidebarNavItem to={"/"} Icon={SbLogout} label="Log out" />
      </div>
    </aside>
  )
}

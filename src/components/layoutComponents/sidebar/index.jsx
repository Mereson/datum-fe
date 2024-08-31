import { Link } from "react-router-dom"
import {
  SbAttendance,
  SbHome,
  SbLogout,
  SbResults,
  SbSubject,
} from "../../../assets"
import { SidebarNavItem } from "../sidebarNav"
import { datumLogoWhite } from "../../../assets/icons/teacherSidebar"

export const StudentSidebar = () => {
  return (
    <aside className="h-[100vh] w-[250px] pl-6 pb-10 bg-[#132985] flex flex-col justify-between">
      <div>
        <Link className="pt-8 flex items-center gap-1" to={"/"}>
          <img
            src={datumLogoWhite}
            className="h-[23px] w-[120px]"
            alt="datum logo"
          />
        </Link>
        <div className="pt-[70px] flex flex-col gap-7">
          <div className="flex flex-col">
            <SidebarNavItem
              to="/students/dashboard"
              Icon={SbHome}
              label={"Dashboard"}
            />
            <SidebarNavItem
              to={"/students/viewResults"}
              Icon={SbResults}
              label={"Results"}
            />
            <SidebarNavItem
              to={"/students/timetable"}
              Icon={SbSubject}
              label={"TimeTable"}
            />
            <SidebarNavItem
              to={"/students/hub"}
              Icon={SbAttendance}
              label={"Hub"}
            />
            <SidebarNavItem
              to={"/students/comming soon"}
              Icon={SbResults}
              label={"Fees"}
            />
            <hr className="mt-2" />
          </div>
        </div>
      </div>
      <div className="pt-11">
        <SidebarNavItem to={"/"} Icon={SbLogout} label="Log out" />
      </div>
    </aside>
  )
}

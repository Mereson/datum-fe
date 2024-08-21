import { Link } from "react-router-dom"
import {
  ParentsIcon,
  SbAttendance,
  SbHome,
  SbLogout,
  SbResults,
  StudentIcon,
  TeachersIcon,
} from "../../../assets"
import { SidebarNavItem } from "../sidebarNav"
import { datumLogoWhite } from "../../../assets/icons/teacherSidebar"

export const AdminSidebar = () => {
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
              to="/admin/dashboard"
              Icon={SbHome}
              label={"Dashboard"}
            />
            <SidebarNavItem
              to={"/admin/teachers"}
              Icon={TeachersIcon}
              label={"Teachers"}
            />
            <SidebarNavItem
              to={"/admin/studentsList"}
              Icon={StudentIcon}
              label={"Students"}
            />
            <SidebarNavItem
              to={"/admin/parents"}
              Icon={ParentsIcon}
              label={"Parents"}
            />
            <SidebarNavItem
              to={"/admin/academics"}
              Icon={SbAttendance}
              label={"Academics"}
            />
            <SidebarNavItem
              to={"/admin/fees"}
              Icon={SbResults}
              label={"Payments"}
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

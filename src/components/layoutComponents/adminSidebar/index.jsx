import { Link } from "react-router-dom"
import {
  DatumLogo,
  ParentsIcon,
  SbAttendance,
  SbHome,
  SbLogout,
  SbNotification,
  SbResults,
  StudentIcon,
  TeachersIcon,
} from "../../../assets"
import { SidebarNavItem } from "../sidebarNav"

export const AdminSidebar = () => {
  return (
    <aside className="h-[100vh] w-[250px] pl-6 pb-7 bg-[#132985] flex flex-col justify-between">
      <div>
        <Link className="pt-8 flex items-center gap-1" to={"/"}>
          <img
            src={DatumLogo}
            className="h-[25px] w-[123.97px]"
            alt="datum logo"
          />
        </Link>
        <div className="pt-[50px] flex flex-col gap-6 w-full">
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
              to={"/admin/attendance"}
              Icon={SbAttendance}
              label={"Accademics"}
            />
            <SidebarNavItem
              to={"/admin/result"}
              Icon={SbResults}
              label={"Payments"}
            />

            <hr className="" />
          </div>
          <div>
            <SidebarNavItem
              to={"/admin/notification"}
              Icon={SbNotification}
              label={"Notifications"}
            />
          </div>
        </div>
      </div>
      <div className="pt-11">
        <SidebarNavItem to={"/"} Icon={SbLogout} label="Log out" />
      </div>
    </aside>
  )
}

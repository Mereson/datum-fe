import { Link } from "react-router-dom"
import {
  DashboardIcon,
  SbHome,
  SbLogout,
  TotalParents,
  TotalStudents,
  TotalTeachers,
} from "../../../assets"
import { SidebarNavItem } from "../sidebarNav"
import { datumLogoWhite } from "../../../assets/icons/teacherSidebar"
import { FeesIcon } from "../../../assets/icons/adminDashboard/fees"

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
              Icon={DashboardIcon}
              label={"Dashboard"}
            />
            <SidebarNavItem
              to={"/admin/studentsList"}
              Icon={TotalStudents}
              label={"Students"}
            />
            <SidebarNavItem
              to={"/admin/teachers"}
              Icon={TotalTeachers}
              label={"Teachers"}
            />
            <SidebarNavItem
              to={"/admin/parents"}
              Icon={TotalParents}
              label={"Parents"}
            />
            <SidebarNavItem
              to={"/admin/academics"}
              Icon={SbHome}
              label={"Academics"}
            />
            <SidebarNavItem
              to={"/admin/fees"}
              Icon={FeesIcon}
              label={"Fees"}
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

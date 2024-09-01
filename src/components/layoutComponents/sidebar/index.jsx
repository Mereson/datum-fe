import { Link } from "react-router-dom"
import {
  DashboardIcon,
  HubIcon,
  SbLogout,
  SbSubject,
  SubjectsIcon,
} from "../../../assets"
import { SidebarNavItem } from "../sidebarNav"
import { datumLogoWhite } from "../../../assets/icons/teacherSidebar"
import { FeesIcon } from "../../../assets/icons/adminDashboard/fees"

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
              Icon={DashboardIcon}
              label={"Dashboard"}
            />
            <SidebarNavItem
              to={"/students/viewResults"}
              Icon={SubjectsIcon}
              label={"Results"}
            />
            <SidebarNavItem
              to={"/students/subjects"}
              Icon={SbSubject}
              label={"Subjects"}
            />
            <SidebarNavItem to={"/students/hub"} Icon={HubIcon} label={"Hub"} />
            <SidebarNavItem
              to={"/students/fees"}
              Icon={FeesIcon}
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

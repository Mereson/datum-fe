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
import { IoMdMenu } from "react-icons/io"
import { useState } from "react"

export const StudentSidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <aside className=" sm:h-[100vh] w-full sm:w-[250px] pl-6 pb-10 bg-[#132985] flex flex-col">
      <div className={`flex justify-between items-center pr-6`}>
        <Link className="pt-8 flex items-center w-1/2 gap-1" to={"/"}>
          <img
            src={datumLogoWhite}
            className="h-[23px] w-[120]"
            alt="datum logo"
          />
        </Link>

        <div
          className={` mt-8 w-[2.25rem] h-8 sm:hidden text-[1.8rem] text-[#f4f4f4] block`}
        >
          <IoMdMenu
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          />
        </div>
      </div>

      <div className={!menuOpen ? "hidden sm:block" : "h-[90vh] sm:h-0"}>
        <div className="pt-[40px] sm:pt-[70px] flex flex-col gap-7">
          <div className="flex flex-col gap-5 sm:gap-0">
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
        <div className="pt-[12rem]">
          <SidebarNavItem to={"/"} Icon={SbLogout} label="Log out" />
        </div>
      </div>
    </aside>
  )
}

import { Link, useNavigate } from "react-router-dom"
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
import { useState } from "react"
import { IoMdMenu } from "react-icons/io"
import { LogOutNavItem } from "../logOutNav"
import { useToken } from "../../../states/students"

export const AdminSidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const onClick = () => {
    setMenuOpen(!menuOpen)
  }

  const { clearToken } = useToken()
  const navigate = useNavigate()

  const logOut = () => {
    clearToken()
    // clearStudentsData()
    navigate("/")
  }

  return (
    <aside className=" sm:h-[100vh] w-full sm:w-[250px] pl-6 pb-10 bg-[#132985] flex flex-col">
      <div className={`flex justify-between items-center pr-6`}>
        <Link className="pt-8 flex items-center gap-1" to={"/"}>
          <img
            src={datumLogoWhite}
            className="h-[23px] w-[120]"
            alt="datum logo"
          />
        </Link>

        <div
          className={` mt-8 w-[2.25rem] h-8 sm:hidden text-[1.8rem] text-[#f4f4f4] block`}
        >
          <IoMdMenu onClick={onClick} />
        </div>
      </div>

      <div className={!menuOpen ? "hidden sm:block" : "h-[90vh] sm:h-0"}>
        <div className="pt-[40px] sm:pt-[70px] flex flex-col gap-7">
          <div className="flex flex-col gap-5 sm:gap-0">
            <SidebarNavItem
              onClick={onClick}
              to="/admin/dashboard"
              Icon={DashboardIcon}
              label={"Dashboard"}
            />
            <SidebarNavItem
              onClick={onClick}
              to={"/admin/studentsList"}
              Icon={TotalStudents}
              label={"Students"}
            />
            <SidebarNavItem
              onClick={onClick}
              to={"/admin/teachers"}
              Icon={TotalTeachers}
              label={"Teachers"}
            />
            <SidebarNavItem
              onClick={onClick}
              to={"/admin/parents"}
              Icon={TotalParents}
              label={"Parents"}
            />
            <SidebarNavItem
              onClick={onClick}
              to={"/admin/academics"}
              Icon={SbHome}
              label={"Academics"}
            />
            <SidebarNavItem to={"/admin/fees"} Icon={FeesIcon} label={"Fees"} />

            <hr className="mt-2" />
          </div>
          <div className="pt-11">
            <LogOutNavItem onClick={logOut} Icon={SbLogout} label="Log out" />
          </div>
        </div>
      </div>
    </aside>
  )
}

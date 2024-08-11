import {
  Datum,
  Logo,
  SbAttendance,
  SbHome,
  SbLogout,
  SbNotification,
  SbResults,
  SbSubject,
} from "../../../assets"
import { SidebarNavItem } from "../sidebarNav"

export const StudentSidebar = () => {
  return (
    <aside className="h-[100vh] w-[220px] pl-8 pr-16 pb-10 bg-[#fafafa] flex flex-col justify-between">
      <div>
        <i className="pt-8 flex items-center gap-1">
          <img
            src={Logo}
            className="h-[25px] w-[25.97px]"
            alt="datum logo icon"
          />
          <img src={Datum} className="h-[14.14px]" alt="datum logo Title" />
        </i>
        <div className="pt-[80px] flex flex-col gap-7">
          <div className="flex flex-col gap-8">
            <SidebarNavItem
              to="/students/dashboard"
              Icon={SbHome}
              label={"Home"}
            />
            <SidebarNavItem to={"/"} Icon={SbSubject} label={"Subject"} />
            <SidebarNavItem to={"/"} Icon={SbAttendance} label={"Attendance"} />
            <SidebarNavItem
              to={"/students/checkResults"}
              Icon={SbResults}
              label={"Result"}
            />
            <hr className="" />
          </div>
          <div>
            <SidebarNavItem
              to={"/students/notification"}
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

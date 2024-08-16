import { Link } from "react-router-dom";
import {
  Datum,
  Logo,
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
    <aside className="h-[100vh] w-[220px] pl-8 pr-14 pb-7 bg-[#fafafa] flex flex-col justify-between">
      <div>
        <Link className="pt-8 flex items-center gap-1" to={"/"}>
          <img
            src={Logo}
            className="h-[25px] w-[25.97px]"
            alt="datum logo icon"
          />
          <img src={Datum} className="h-[14.14px]" alt="datum logo Title" />
        </Link>
        <div className="pt-[50px] flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-[32px]">
            <SidebarNavItem
              to="/admin/dashboard"
              Icon={SbHome}
              label={"Home"}
            />
            <SidebarNavItem
              to={"/admin/addParents"}
              Icon={StudentIcon}
              label={"Students"}
            />
            <SidebarNavItem
              to={"/admin/teachers"}
              Icon={TeachersIcon}
              label={"Teachers"}
            />
            <SidebarNavItem
              to={"/admin/parents"}
              Icon={ParentsIcon}
              label={"Parents"}
            />
            <SidebarNavItem
              to={"/admin/attendance"}
              Icon={SbAttendance}
              label={"Attendance"}
            />
            <SidebarNavItem
              to={"/admin/result"}
              Icon={SbResults}
              label={"Results"}
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
  );
};

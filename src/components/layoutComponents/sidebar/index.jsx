import { Link } from "react-router-dom";
import {
  DatumLogo,
  SbAttendance,
  SbHome,
  SbLogout,
  SbNotification,
  SbResults,
  SbSubject,
} from "../../../assets";
import { SidebarNavItem } from "../sidebarNav";

export const StudentSidebar = () => {
  return (
    <aside className="h-[100vh] w-[250px] pl-8 pb-10 bg-[#132985] flex flex-col justify-between">
      <div>
        <Link className="pt-8 flex items-center gap-1" to={"/"}>
          <img
            src={DatumLogo}
            className="h-[25px] w-[123.97px]"
            alt="datum logo"
          />
        </Link>
        <div className="pt-[80px] flex flex-col gap-7">
          <div className="flex flex-col">
            <SidebarNavItem
              to="/students/dashboard"
              Icon={SbHome}
              label={"Dashboard"}
            />
            <SidebarNavItem
              to={"/students/uploadResult1"}
              Icon={SbSubject}
              label={"Subject"}
            />
            <SidebarNavItem
              to={"/students/attendance"}
              Icon={SbAttendance}
              label={"Attendance"}
            />
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
  );
};

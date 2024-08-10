import { NavLink } from "react-router-dom"
import {
  Datum,
  Logo,
  SbAttendance,
  SbHome,
  SbResults,
  SbSubject,
} from "../../../assets"

export const StudentSidebar = () => {
  return (
    <aside className="h-[100vh] w-[220px] pl-8 pr-16 bg-[#fafafa]">
      <i className="pt-8 flex items-center gap-1">
        <img
          src={Logo}
          className="h-[25px] w-[25.97px]"
          alt="datum logo icon"
        />
        <img src={Datum} className="h-[14.14px]" alt="datum logo Title" />
      </i>
      <div className="pt-[80px]">
        <div className="flex flex-col gap-8">
          {/* 1 */}
          <NavLink className="flex items-center gap-[10px]">
            <i className="px-[9px] py-[8px] rounded-lg bg-[#132985]">
              <SbHome />
            </i>
            <p className="font-bold text-[15px] text-[#132985]">Home</p>
          </NavLink>
          {/* 2 */}
          <NavLink className="flex items-center gap-[10px]">
            <i className="px-[9px] py-[8px] rounded-lg bg-[#efefef]">
              <SbSubject />
            </i>
            <p className="font-bold text-[15px] text-[#8a8a8a]">Subject</p>
          </NavLink>
          {/* 3 */}
          <NavLink className="flex items-center gap-[10px]">
            <i className="px-[9px] py-[8px] rounded-lg bg-[#efefef]">
              <SbAttendance />
            </i>
            <p className="font-bold text-[15px] text-[#8a8a8a]">Attendance</p>
          </NavLink>
          {/* 4 */}
          <NavLink className="flex items-center gap-[10px]">
            <i className="px-[9px] py-[8px] rounded-lg bg-[#efefef]">
              <SbResults />
            </i>
            <p className="font-bold text-[15px] text-[#8a8a8a]">Result</p>
          </NavLink>
        </div>
      </div>
      <div>hey</div>
    </aside>
  )
}

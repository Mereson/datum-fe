import {
  AdminIcon,
  AttendanceComponent,
  BackIcon,
} from "../../../../components"
import { attendanceData } from "../../../../testData"

export const AdminAttendanceList = () => {
  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <div className="flex justify-between pb-5">
        <div className="flex items-end">
          <BackIcon link={"/admin/academics"} />
        </div>
        <AdminIcon />
      </div>
      <AttendanceComponent
        myData={attendanceData}
        title={"Students List"}
        people={"Students Attendance"}
      />
    </section>
  )
}

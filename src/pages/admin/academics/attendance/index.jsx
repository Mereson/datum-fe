import {
  AdminIcon,
  AttendanceComponent,
  BackIcon,
} from "../../../../components"
import { attendanceData } from "../../../../testData"

export const AdminAttendanceList = () => {
  return (
    <section className="w-full h-full pl-4 sm:px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <div className="flex justify-between pb-5 pr-4">
        <BackIcon link={"/admin/academics"} />

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

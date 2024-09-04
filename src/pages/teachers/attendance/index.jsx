import { AttendanceComponent, TeacherAvater } from "../../../components"
import { attendanceData } from "../../../testData"

export const TeachersAttendanceList = () => {
  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main>
        <div className="flex justify-end pb-[20px]">
        <TeacherAvater />
        </div>

        <AttendanceComponent
          myData={attendanceData}
          title={"Students Attendance"}
          people={"Students Attendance"}
          searchValue={"name"}
        />
      </main>
    </section>
  )
}

import { Link } from "react-router-dom"
import { ReadingStudent, SchoolChild } from "../../../assets"
import {
  ActivitySection,
  AttendanceBarChart,
  CoreSubjects,
  StudentIcon,
  StudentsAttendance,
  WelcomeBox,
} from "../../../components"

import styles from "./style.module.css"

export const StudentsDashboard = () => {
  const score = 14
  const total = 20
  const percentage = Math.floor((score / total) * 100)

  return (
    <section className="sm:flex overflow-auto w-full h-[100%] bg-[#f4f4f4] justify-between">
      <section
        className={`${styles.scrollbar} border-2 sm:px-[80px] px-[2rem] pt-[70px] pb-[30px] overflow-auto grid grid-cols-2 gap-[35px] gap-x-7 w-full sm:w-[71%]`}
      >
        <div className="sm:hidden border-2 px-0 w-full py-0">
          <StudentIcon />
        </div>
        <WelcomeBox bg={"bg-[#132985]"} avatar={ReadingStudent} student />
        <CoreSubjects subjects={subjects} />
        <StudentsAttendance
          score={score}
          total={total}
          percentage={percentage}
        />

        <div className="group col-span-2 mt-2 py-4 bg-[#fafafa] h-[292px] shadow-sm rounded-2xl cursor-pointer">
          <Link to={"/students/hub/studentsAttendance"}>
            <div className="px-8 flex justify-between">
              <h3 className=" text-lg font-bold group-hover:text-[#f4901f] transition-all duration-200 ease-in-out">
                Subject Attendance
              </h3>
              <div className="text-[10px] text-[#191919] font-normal">
                <p className="flex items-center text-center gap-2">
                  <p className="size-2 rounded-full bg-[#132985]"></p>
                  <p>Present</p>
                </p>
                <p className="flex items-center text-center gap-2">
                  <p className="size-2 rounded-full bg-[#8884d8]"></p>
                  <p>Absent</p>
                </p>
              </div>
            </div>
            <AttendanceBarChart data={attendance} />
          </Link>
        </div>
      </section>
      <ActivitySection
        name={"Ene Maria"}
        img={SchoolChild}
        path={"/students/studentProfile"}
      />
    </section>
  )
}

const subjects = [
  {
    id: 1,
    name: "Eng",
    subject: "English",
    topics: 8,
    Total: 31,
  },
  {
    id: 2,
    name: "Maths",
    subject: "Mathematics",
    topics: 5,
    Total: 65,
  },

  {
    id: 3,
    name: "Bio",
    subject: "Biology",
    topics: 4,
    Total: 77,
  },
  {
    id: 4,
    name: "Phy",
    subject: "Physics",
    topics: 4,
    Total: 77,
  },
  {
    id: 5,
    name: "Chem",
    subject: "Chemistry",
    topics: 6,
    Total: 40,
  },
  {
    id: 6,
    name: "Geo",
    subject: "Geography",
    topics: 5,
    Total: 59,
  },
]

const attendance = [
  {
    subject: "Eng",
    present: 98,
    absent: 2,
  },
  {
    subject: "Maths",
    present: 60,
    absent: 40,
  },
  {
    subject: "Bio",
    present: 70,
    absent: 30,
  },
  {
    subject: "Phy",
    present: 25,
    absent: 75,
  },
  {
    subject: "Chem",
    present: 70,
    absent: 30,
  },
  {
    subject: "Geo",
    present: 60,
    absent: 40,
  },
]

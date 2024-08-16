import { Link } from "react-router-dom"
import { SchoolChild } from "../../../assets"
import {
  ActivitySection,
  CoreSubjects,
  GradesBarChart,
  SearchBox,
  StudentsAttendance,
  WelcomeBox,
} from "../../../components"

import styles from "./style.module.css"

export const StudentsDashboard = () => {
  const score = 14
  const total = 20
  const percentage = Math.floor((score / total) * 100)

  return (
    <section className="flex w-[100%] h-[100%] bg-[#f4f4f4] justify-between">
      <section
        className={`${styles.scrollbar} overflow-auto pr-[75px] pl-[86px] col-span-3 grid grid-cols-2 gap-3 w-[71%]`}
      >
        <SearchBox />
        <WelcomeBox />
        <CoreSubjects subjects={subjects} />
        <StudentsAttendance
          score={score}
          total={total}
          percentage={percentage}
        />

        <div className="group col-span-2 mt-6 py-4 bg-[#fafafa] h-[292px] shadow-sm rounded-2xl cursor-pointer">
          <Link to={"/students/checkResults/resultAnalysis"}>
            <h3 className="px-14 text-lg font-bold group-hover:text-[#f4901f] transition-all duration-200 ease-in-out">
              Performance
            </h3>
            <GradesBarChart subjects={subjects} />
          </Link>
        </div>
      </section>
      <ActivitySection name={"Ene Maria"} img={SchoolChild} />
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

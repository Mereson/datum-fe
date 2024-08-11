import {
  CoreSubjects,
  GradesBarChart,
  SearchBox,
  StudentsAttendance,
  WelcomeBox,
} from "../../../components"

export const StudentsDashboard = () => {
  const score = 14
  const total = 20

  const percentage = Math.floor((score / total) * 100)

  return (
    <section className="flex overflow-auto w-[100%] h-[100%] bg-[#f4f4f4] justify-between">
      <section className="pr-[75px] pl-[86px] col-span-3 grid grid-cols-2 gap-3 w-[71%]">
        <SearchBox />
        <WelcomeBox />
        <CoreSubjects subjects={subjects} />
        <StudentsAttendance
          score={score}
          total={total}
          percentage={percentage}
        />

        <div className="col-span-2 mt-6 py-4 bg-[#fafafa] h-[292px] rounded-2xl">
          <h3 className="px-14 text-lg font-bold">Performance</h3>
          <GradesBarChart subjects={subjects} />
        </div>
      </section>
      <section className="bg-[#ffff] w-[29%] ">
        <div className="bg-[#ffff] px-3 pb-10">
          <div className="h-[174px] mt-4 mb-7">hey</div>
          <div className="h-[408px] bg-[#ffffff] border border-[#ededed] rounded-2xl"></div>
          <div className="h-[318px] bg-[#ffffff] mt-5 border border-[#ededed] rounded-2xl"></div>
        </div>
      </section>
    </section>
  )
}

const subjects = [
  {
    id: 1,
    subject: "Mathematics",
    topics: 5,
    grade: 88,
  },
  {
    id: 2,
    subject: "English",
    topics: 8,
    grade: 45,
  },
  {
    id: 3,
    subject: "Biology",
    topics: 4,
    grade: 68,
  },
  {
    id: 4,
    subject: "Physics",
    topics: 4,
    grade: 59,
  },
  {
    id: 5,
    subject: "Economics",
    topics: 6,
    grade: 30,
  },
  {
    id: 6,
    subject: "Chemistry",
    topics: 5,
    grade: 72,
  },
]

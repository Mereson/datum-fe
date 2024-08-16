import { CustomSelect, GradesBarChart } from "../../students"

export const AsAttendanceView = () => {
  return (
    <div className=" py-4 bg-[#fafafa] h-[309px] shadow-sm rounded-2xl">
      <div className="px-[12px] flex items-center justify-between">
        <h3 className="text-lg font-bold">Students Attendance</h3>
        <CustomSelect
          query={"Week 1"}
          options={week}
          index={1}
          width="w-[6rem]"
          padding="px-[10px] py-[8px]"
        />
      </div>
      <GradesBarChart subjects={attendance} />
    </div>
  )
}

const attendance = [
  {
    id: 1,
    name: "Mon",
    Total: 88,
  },
  {
    id: 2,
    name: "Tue",
    Total: 45,
  },
  {
    id: 3,
    name: "Wed",
    Total: 59,
  },
  {
    id: 4,
    name: "Thur",
    Total: 68,
  },
  {
    id: 5,
    name: "Fri",
    Total: 72,
  },
]

const week = [
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
  "Week 5",
  "Week 6",
  "Week 7",
  "Week 8",
  "Week 9",
  "Week 10",
  "Week 11",
  "Week 12",
]

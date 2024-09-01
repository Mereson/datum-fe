import { Timetable } from "../../../../assets"
import { BackIcon, StudentIcon } from "../../../../components"

export const StudentsTimeTable = () => {
  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main>
        <div className="flex justify-between pb-14">
          <div className="flex items-end">
            <BackIcon link={"/students/hub"} />
          </div>
          <StudentIcon />
        </div>
        <h2 className="pb-[40px] text-2xl">My Timetable</h2>

        <div>
          <img src={Timetable} alt="timetable" />
        </div>
      </main>
    </section>
  )
}

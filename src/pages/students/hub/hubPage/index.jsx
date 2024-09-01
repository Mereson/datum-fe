import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export const HubPage = () => {
  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main className="grid mt-9 grid-cols-3 gap-9">
        <HubCard
          text={"Attendance"}
          link={"/students/hub/studentsAttendance"}
        />
        <HubCard text={"Calender"} link={"/students/hub/studentsCalender"} />
        <HubCard
          text={"Scheme Of Work"}
          link={"/students/hub/studentsScheme"}
        />
        <HubCard text={"Timetable"} link={"/students/hub/studentsTimeTable"} />
      </main>
    </section>
  )
}

const HubCard = ({ text, link }) => {
  return (
    <Link to={link}>
      <div className="h-56 border-2 grid place-items-center rounded-2xl shadow-lg ">
        <h3 className="font-semibold text-xl text-[#0b132e]">{text}</h3>
      </div>
    </Link>
  )
}

HubCard.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
}

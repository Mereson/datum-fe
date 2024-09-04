import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styles from "./style.module.css"

export const HubPage = () => {
  return (
    <section className="overflow-auto w-full h-full px-[5.5rem] bg-[#f4f4f4] pt-8 pb-40 ">
      <main className="grid mt-9 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 overflow-auto">
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
      <div
        className={`${styles.hubcard} h-56 grid place-items-center rounded-2xl border-2 shadow-lg`}
      >
        <h3 className="font-semibold text-xl text-[#0b132e]">{text}</h3>
      </div>
    </Link>
  )
}

HubCard.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
}

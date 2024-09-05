import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { BackIcon } from "../../../../components"

export const AdminAcad = () => {
  return (
    <section className="w-full h-full px-[5rem] bg-[#f4f4f4] pt-8 pb-40 sm:pb-14 overflow-auto">
      <BackIcon link={"/admin/dashboard"} />
      <main className="grid mt-9 sm:grid-cols-3 gap-9">
        <AcadCard text={"Attendance"} link={"/admin/academics/attendance"} />
        <AcadCard text={"Classes"} link={"/admin/academics/classes"} />
        <AcadCard text={"Calender"} link={"/admin/academics/events"} />
        <AcadCard text={"Results"} link={"/admin/academics/result"} />
        <AcadCard
          text={"Scheme Of Work"}
          link={"/admin/academics/schemeOfWork"}
        />
        <AcadCard text={"Subjects"} link={"/admin/academics/subjects"} />
      </main>
    </section>
  )
}

const AcadCard = ({ text, link }) => {
  return (
    <Link to={link}>
      <div className="h-56 border-2 grid place-items-center rounded-2xl shadow-lg hover:border-[#f4901f]">
        <h3 className="font-semibold text-xl text-[#0b132e]">{text}</h3>
      </div>
    </Link>
  )
}

AcadCard.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
}

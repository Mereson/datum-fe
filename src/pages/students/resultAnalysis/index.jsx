import PropTypes from "prop-types"
import { GradesBarChart } from "../../../components"
import { Button } from "../../../components/button"

export const ResultAnalysis = () => {
  return (
    <section className="overflow-auto flex flex-col items-center pb-9 w-[100%] bg-[#f4f4f4]">
      <div className="mt-7 h-[488px] w-[80%]">
        <h4 className="text-lg font-bold pb-2">Result Analysis</h4>
        <GradesBarChart subjects={subjects} bool={true} />
      </div>
      <div className="mt-14 grid grid-cols-3 gap-[71px] w-[80%]">
        <Box title={"Average"} text={"64.78"} />
        <Box title={"Position"} text={"22nd"} />
        <Box title={"Out of"} text={"50"} />
      </div>
      <div className="mt-[59px] w-[80%]">
        <div className="w-[70%]">
          <h4 className="font-bold text-lg text-[#444444]">Feedback</h4>
          <p className="text-[#444444]">
            You did well in all other subject but you are lagging in English and
            Economics, please try and focus on them.
          </p>
        </div>
        <Button
          content="See Other Analysis/Feedback"
          className={
            "bg-[#132985] w-[30%] py-[8px] mt-9 text-center rounded-[4px] font-bold text-white cursor-pointer"
          }
        />
      </div>
    </section>
  )
}

const Box = ({ title, text }) => {
  return (
    <div className="px-12 py-2 grid gap-1 border text-center rounded-lg border-[#d2d2d2]">
      <p className="">{title}:</p>
      <h4 className="font-bold text-lg">{text}</h4>
    </div>
  )
}

Box.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

const subjects = [
  {
    id: 1,
    subject: "Mathematics",
    grade: 88,
  },
  {
    id: 2,
    subject: "English",
    grade: 45,
  },
  {
    id: 3,
    subject: "Biology",
    grade: 68,
  },
  {
    id: 4,
    subject: "Physics",
    grade: 59,
  },
  {
    id: 5,
    subject: "Economics",
    grade: 30,
  },
  {
    id: 6,
    subject: "Chemistry",
    grade: 72,
  },
  {
    id: 7,
    subject: "Geography",
    grade: 57,
  },
  {
    id: 8,
    subject: "Agriculture",
    grade: 62,
  },
  {
    id: 9,
    subject: "Igbo",
    grade: 65,
  },
]

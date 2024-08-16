import PropTypes from "prop-types"
import { GradesBarChart } from "../../../components"
import { Button } from "../../../components/button"
import { FaArrowLeft } from "react-icons/fa6"
import { Link } from "react-router-dom"

export const ResultAnalysis = () => {
  const returnAverage = () => {
    let sumOfTotals = 0

    subjects.map((item) => {
      sumOfTotals = sumOfTotals + item.Total
    })

    let average = Math.round((sumOfTotals / subjects.length) * 100) / 100
    return average
  }

  return (
    <section className="overflow-auto flex flex-col items-center pb-9 w-[100%] bg-[#f4f4f4]">
      <div className="mt-7 h-[488px] w-[80%]">
        <div className="flex gap-2 items-center pb-2">
          <Link to={"/students/checkResults/viewResults"} className="group">
            <FaArrowLeft className="group-hover:text-[#f4901f] transition-all duration-200 ease-in-out" />
          </Link>
          <h4 className="text-lg font-bold">Result Analysis</h4>
        </div>
        <GradesBarChart subjects={subjects} bool={true} />
      </div>
      <div className="mt-14 grid grid-cols-3 gap-[71px] w-[80%]">
        <Box title={"Average"} text={returnAverage()} />
        <Box title={"Position"} text={"22nd"} />
        <Box title={"Out of"} text={"50"} />
      </div>
      <div className="mt-[59px] w-[80%]">
        <div className="w-[70%]">
          <h4 className="font-bold text-lg text-[#444444]">Feedback</h4>
          <p className="text-[#444444]">
            You did well in all other subject but you are lagging in English and
            Chemistry, please try and focus on them.
          </p>
        </div>
        <Button
        link={"/students/checkResults/subjectAnalysis"}
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
    name: "Eng",
    Total: 31,
  },
  {
    id: 2,
    name: "Maths",
    Total: 65,
  },

  {
    id: 3,
    name: "Bio",
    Total: 77,
  },
  {
    id: 4,
    name: "Phy",
    Total: 77,
  },
  {
    id: 5,
    name: "Chem",
    Total: 40,
  },
  {
    id: 6,
    name: "Geo",
    Total: 59,
  },
  {
    id: 7,
    name: "Agric",
    Total: 62,
  },
  {
    id: 8,
    name: "Igbo",
    Total: 86,
  },
  {
    id: 9,
    name: "CRS",
    Total: 63,
  },
  {
    id: 10,
    name: "Civic",
    Total: 78,
  },
  {
    id: 11,
    name: "ICT",
    Total: 72,
  },
  {
    id: 12,
    name: "Health Ed",
    Total: 75,
  },
]

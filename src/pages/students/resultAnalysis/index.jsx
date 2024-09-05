import PropTypes from "prop-types"
import { GradesBarChart, TableModel } from "../../../components"
import { Button } from "../../../components/button"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export const ResultAnalysis = ({ data, columns }) => {
  // const returnAverage = () => {
  //   let sumOfTotals = 0

  //   subjects.map((item) => {
  //     sumOfTotals = sumOfTotals + item.Total
  //   })

  //   let average = Math.round((sumOfTotals / subjects.length) * 100) / 100
  //   return average
  // }
  const [openTab, setOpenTab] = useState(false)
  const navigate = useNavigate()
  const showAnalysis = () => {
    setOpenTab(!openTab)
  }

  const feedBackFn = () => {
    navigate("/students/viewResults/feedBack")
  }

  return (
    <section>
      {openTab ? (
        <div className="px-2 h-[488px] w-[100%] overflow-x-auto ">
          <GradesBarChart subjects={data} bool />
        </div>
      ) : (
        <TableModel
          myData={data}
          columns={columns}
          people={"Subjects"}
          justTable
          searchValue={"subject"}
          center={"text-center justify-center"}
          // rowOnClick={onClick}
        />
      )}

      <div className=" w-full flex gap-8 pt-3">
        <Button
          onClick={showAnalysis}
          content={openTab ? "See Result" : "Check Analysis"}
          className={
            "bg-[#132985] w-[100%] py-2 px-1 sm:px-10 mt-11 text-center rounded-[4px] text-sm font-bold text-white cursor-pointer flex justify-center"
          }
        />
        <Button
          onClick={feedBackFn}
          content="View FeedBack"
          className={
            "bg-[#132985] w-[100%] py-2 px-1 sm:px-10 mt-11 text-center rounded-[4px] text-sm font-bold text-white cursor-pointer flex justify-center"
          }
        />
      </div>

      {/* <div className="mt-14 grid grid-cols-3 gap-[71px] w-[80%]">
        <Box title={"Average"} text={returnAverage()} />
        <Box title={"Position"} text={"22nd"} />
        <Box title={"Out of"} text={"50"} />
      </div> */}
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

ResultAnalysis.propTypes = {
  data: PropTypes.any,
  columns: PropTypes.array,
}

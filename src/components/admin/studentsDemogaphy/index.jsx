// import PropTypes from "prop-types"
import { ComparisonChart } from "../demographyBar"

export const StudentsDemography = () => {
  const boysCount = 1750
  const girlsCount = 1750

  return (
    <div className=" bg-[#fafafa] h-[309px] pt-[30px] shadow-sm rounded-2xl">
      <div className="grid gap-6 place-items-center">
        <h4 className="font-bold text-center w-[158px] text-lg">
          {"Student’s"} Gender Demography
        </h4>
        <ComparisonChart boysCount={boysCount} girlsCount={girlsCount} />
        <div className="flex gap-[52px] justify-between">
          <div className="flex items-center gap-2">
            <p className={`w-[16px] h-[16px] rounded-full bg-[#f4901f]`}></p>
            <p> Boys: {boysCount}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className={`w-[16px] h-[16px] rounded-full bg-[#132985]`}></p>
            <p>Girls: {girlsCount}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

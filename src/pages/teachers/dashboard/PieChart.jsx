
import { ComparisonChart } from "../../../components"

const MyChart = () => {
  const boysCount = 25
  const girlsCount = 25

  return (
    <div className=" w-full">
      <div className="grid pb-12 place-items-center">
      <ComparisonChart boysCount={boysCount} girlsCount={girlsCount} />
      </div>
      <div className="flex gap-[42px] justify-between">
        <div className="flex items-center gap-2">
          <p className={`w-[16px] h-[16px] rounded-full bg-[#d0d4e7]`}></p>
          <p> Boys: {boysCount}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className={`w-[16px] h-[16px] rounded-full bg-[#132985]`}></p>
          <p>Girls: {girlsCount}</p>
        </div>
      </div>
    </div>
  )
}

export default MyChart

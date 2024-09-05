import PropTypes from "prop-types"
import { Button } from "../../../landingPage"
import { Link } from "react-router-dom"

export const Activites = () => {
  return (
    <div className="h-[408px] bg-[#ffffff] border border-[#ededed] rounded-2xl py-7 px-10">
      <h3 className="text-lg font-bold pb-5">Activities</h3>
      <div>
        <Activity title={"Mid term break"} circle={"border-[#132985]"}>
          <ul className="pt-2 pl-1 list-disc text-[#5c5c5c] text-sm list-inside">
            <li>
              <span className="font-semibold text-[13px]">Start Date: </span>
              October 15
            </li>
            <li>
              <span className="font-semibold text-[13px]">End Date: </span>{" "}
              October 23
            </li>
          </ul>
        </Activity>
        <Activity title={"Holiday Activities"} circle={"border-[#f4901f]"}>
          <ul className="pt-2 pl-1 list-disc text-[#5c5c5c] text-sm list-inside">
            <li>
              <span className="font-semibold text-[13px]">Start Date: </span>
              December 20
            </li>
            <li>
              <span className="font-semibold text-[13px]">End Date: </span>
              January 6
            </li>
          </ul>

          <Link to="/students/hub/studentsCalender">
            <Button
              text={"View activities"}
              style={"py-[7px] px-7 mt-4 font-bold text-sm text-white"}
            />
          </Link>
        </Activity>
        <Activity
          title={"Resumption Date"}
          circle={"border-[#439f6e]"}
          border="border-none"
        >
          <p className=" text-[#5c5c5c] text-sm pt-2">
            <span className="font-semibold text-[13px]">Date: </span>
            January 7
          </p>
        </Activity>
      </div>
    </div>
  )
}

const Activity = ({ title, circle, children, border = "border-l-[1px]" }) => {
  return (
    <div className={`border-[#b8b8b8b3] ${border} pb-7 pl-[26.8px] relative`}>
      <div
        className={`w-[13.8px] h-[14.47px] rounded-full border-[2px] ${circle} absolute left-[-7px] bg-[#f4f4f4]`}
      ></div>
      <h5 className="leading-none text-[15px] font-semibold">{title}</h5>
      {children}
    </div>
  )
}

Activity.propTypes = {
  title: PropTypes.string,
  circle: PropTypes.string,
  border: PropTypes.string,
  children: PropTypes.object,
}

import PropTypes from "prop-types"
import { Activites } from "../activities"
import { CustomCalendar } from "../customCalender"

import styles from "./style.module.css"
import { useNavigate } from "react-router-dom"

export const ActivitySection = ({ name, img, path }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(path)
  }
  return (
    <section
      className={`${styles.scrollbar} bg-[#FAFAFA] sm:w-[29%] overflow-auto pb-32`}
    >
      <div className="bg-[#FAFAFA] flex flex-col items-center">
        <div className="h-[174px] mt-5 hidden mb-5 sm:flex flex-col items-center">
          <div className="flex items-center justify-center pb-3 relative">
            <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center">
              <img className=" rounded-full " src={img} alt="Profile Image" />
            </div>
            <span className="w-[22.43px] h-[22.43px] rounded-full bg-[#3ac922] border-white border-2 absolute top-[80px] left-[73px]"></span>
          </div>
          <div>
            <h3 className="text-[18px] font-semibold text-[#181818]">{name}</h3>
            <p
              onClick={handleNavigate}
              className="cursor-pointer text-sm text-[#132985] text-center"
            >
              Edit Profile
            </p>
          </div>
        </div>
        <Activites />
        <div className="mh-[318px] bg-[#ffffff] mt-5 border border-[#ededed] rounded-2xl pb-4">
          <CustomCalendar />
        </div>
      </div>
    </section>
  )
}

ActivitySection.propTypes = {
  name: PropTypes.string,
  img: PropTypes.any,
  path: PropTypes.string,
}

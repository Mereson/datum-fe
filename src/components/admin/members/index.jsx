import PropTypes from "prop-types"
import { TotalParents, TotalStudents, TotalTeachers } from "../../../assets"

export const MembersGrid = () => {
  return (
    <div className="grid grid-cols-3 col-span-2 gap-3">
      <Members
        Icon={TotalStudents}
        iconInside={"#132985"}
        bg={"bg-[#132985]"}
        color={"text-[#ffffff]"}
        title={"Total Students"}
        text={"3500"}
      />
      <Members
        Icon={TotalTeachers}
        bg={"bg-[#f4901f]"}
        color={"text-[#ffffff]"}
        title={"Total Teachers"}
        text={"120"}
      />
      <Members
        Icon={TotalParents}
        bg={"bg-[#b0b8d6]"}
        color={"text-[#ffffff]"}
        title={"Total Parents"}
        text={"2000"}
      />
    </div>
  )
}

const Members = ({ bg, color, title, text, Icon, iconInside }) => {
    return (
      <div
        className={`${bg} rounded-2xl flex flex-col justify-center gap-[6px] h-[116px] pl-4`}
      >
        <div
          className={`w-12 h-12 rounded-lg bg-[#f8f8f8] grid place-items-center`}
        >
          <Icon color={"#000"} size="24" inside={iconInside} />
        </div>
        <div className={`flex gap-[14px] items-center ${color}`}>
          <p>{title}</p>
          <h3 className="font-bold text-xl">{text}</h3>
        </div>
      </div>
    )
  }
  
  Members.propTypes = {
    bg: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.string,
    Icon: PropTypes.string,
    iconInside: PropTypes.string,
  }
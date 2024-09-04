import PropTypes from "prop-types"
import { TotalParents, TotalStudents, TotalTeachers } from "../../../assets"

export const MembersGrid = () => {
  return (
    <div className="grid grid-cols-3 col-span-2 gap-[20px]">
      <Members
        Icon={TotalStudents}
        iconInside={"#132985"}
        bg={"bg-[#f4f4f4]"}
        color={"text-[#444444]"}
        title={"Total Students"}
        text={"3500"}
      />
      <Members
        Icon={TotalTeachers}
        bg={"bg-[#f4f4f4]"}
        color={"text-[#444444]"}
        title={"Total Teachers"}
        text={"120"}
      />
      <Members
        Icon={TotalParents}
        bg={"bg-[#f4f4f4]"}
        color={"text-[#444444]"}
        title={"Total Parents"}
        text={"2000"}
      />
    </div>
  )
}

const Members = ({ bg, color, title, text, Icon, iconInside }) => {
  return (
    <div
      className={`${bg} rounded-2xl flex pt-2 border-[1.47px] border-[#D2D2D2] flex-col justify-center gap-[6px] h-[112px] pl-4`}
    >
      <div
        className={`w-10 h-10 rounded-lg bg-[#3A4D991A] grid place-items-center`}
      >
        <Icon color={"#3A4D99"} size="22" inside={iconInside} />
      </div>
      <div className={`flex gap-[13px] pt-[5px] items-center ${color}`}>
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

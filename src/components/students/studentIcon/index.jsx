import { useNavigate } from "react-router-dom"
import { NotificationSvg, SchoolChild } from "../../../assets"

export const StudentIcon = () => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate("/students/studentProfile")
  }
  return (
    <div className="flex gap-5 items-center justify-end">
      <div className="p-[12px] bg-[#EFEFEF] text-[17.57px] text-[#404040] font-bold rounded-[12.5px]">
        <img
          src={NotificationSvg}
          className="size-[20px]"
          alt="notification icon"
        />
      </div>
      <div onClick={onClick} className="flex gap-2 cursor-pointer items-center">
        <figure className="size-[50px] rounded-full">
          <img className="rounded-full" src={SchoolChild} alt="student image" />
        </figure>
        <div className="text-[15px]">
          <p className="font-bold">Ene Maria</p>
          <p>Student</p>
        </div>
      </div>
    </div>
  )
}

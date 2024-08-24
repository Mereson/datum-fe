import { NotificationSvg, SchoolChild } from "../../../assets"
import { SearchBox } from "../../../components"

export const PersonalInfo = () => {
  return (
    <section className=" bg-[#f4f4f4] w-full overflow-auto pt-8 px-[6.25rem] pb-[9.563rem]">
      <div className="flex justify-between">
        <div className="w-[70%]">
          <SearchBox />
        </div>

        <div className="flex gap-5 items-center justify-end">
          <div className="p-[12px] bg-[#EFEFEF] text-[17.57px] text-[#404040] font-bold rounded-[12.5px]">
            <img
              src={NotificationSvg}
              className="size-[20px]"
              alt="notification icon"
            />
          </div>
          <div className="flex gap-2 items-center">
            <figure className="size-[50px] rounded-full">
              <img className="rounded-full" src={SchoolChild} alt="" />
            </figure>
            <div className="text-[15px]">
              <p className="font-bold">Ene Maria</p>
              <p>Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Activites } from "../activities"
import { CustomCalendar } from "../customCalender"

export const ActivitySection = () => {
  return (
    <section className="bg-[#ffffff] w-[29%] ">
      <div className="bg-[#ffffff] px-3 pb-10">
        <div className="h-[174px] mt-5 mb-7 flex flex-col items-center">
          <div className="flex items-center justify-center pb-3 relative">
            <h3 className="text-2xl font-bold text-white bg-[#f4901f] w-[100px] h-[100px] rounded-full flex items-center justify-center">
              EM
            </h3>
            <span className="w-[22.43px] h-[22.43px] rounded-full bg-[#3ac922] border-white border-2 absolute top-[80px] left-[73px]"></span>
          </div>
          <div>
            <h3 className="text-[22px] font-bold text-[#181818]">Ene Maria</h3>
            <p className="text-sm text-[#132985] text-center">Edit Profile</p>
          </div>
        </div>
        <Activites />
        <div className="h-[318px] bg-[#ffffff] mt-5 border border-[#ededed] rounded-2xl">
          <CustomCalendar />
        </div>
      </div>
    </section>
  )
}

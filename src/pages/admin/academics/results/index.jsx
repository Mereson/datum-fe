import { useState } from "react"
import { AdminProfileImg, NotificationSvg } from "../../../../assets"
import { CustomSelect, MembersList, SearchBox } from "../../../../components"
import { resultsData } from "../../../../testData"

export const AdminResultsList = () => {
  const [openTab, setOpenTab] = useState(true);

  const handleTabSwitch = (e) => {
    setOpenTab(prevState => !prevState);

  }

  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main className="grid gap-4">
        <div className="flex flex-col">
          <div className="flex gap-5 items-center justify-end">
            <div className="p-[12px] bg-[#EFEFEF] text-[17.57px] text-[#404040] font-bold rounded-[12.5px]">
              <img src={NotificationSvg} className="size-[20px]" alt="notification icon" />
            </div>
            <div className="flex gap-2 items-center">
              <figure className="size-[50px] rounded-full">
                <img src={AdminProfileImg} alt="" />
              </figure>
              <div className="text-[15px]">
                <p className="font-bold">Nkechi Nduka</p>
                <p>Admin</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 font-bold items-center">
            <p onClick={handleTabSwitch} className={`cursor-pointer ${openTab ? "text-[#0D1B59] underline underline-offset-4" : ("text-[#132985]")} `}>Uploaded Results</p>
            <p onClick={handleTabSwitch} className={`cursor-pointer ${openTab ? "text-[#132985]" : ("text-[#0D1B59] underline underline-offset-4 ")} `}>Students Result</p>
          </div>
        </div>
        <div className="flex justify-between">
          <SearchBox width="w-[20rem] xl:w-[25rem] " placeholder="Search" />
          <div className="flex gap-3 items-center">
            <p className="font-bold text-[#444444]">Filter by:</p>
            <CustomSelect index={1} query={"Class"} width={"6.8rem"} options={[]} />
            <CustomSelect index={2} query={"Gender"} width={"6.8rem"} options={[]} />
            <CustomSelect index={3} query={"Sort by"} width={"6.8rem "} options={[]} />
          </div>
        </div>

        {openTab ? (<MembersList data={resultsData} people={"Teachers"} />) : (
          <p className=" text-[#6270AE] pb-4">Nothing to display</p>)}

      </main>
    </section>
  )
}
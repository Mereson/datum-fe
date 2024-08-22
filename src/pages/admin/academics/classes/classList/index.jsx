import { AdminProfileImg, NotificationSvg } from "../../../../../assets"
import { AddBtn, MembersList } from "../../../../../components"
import { Button } from "../../../../../components/button"
import { classData } from "../../../../../testData"

export const AdminClassesList = () => {
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

          <Button
            link={"/admin/academics/addClass"}
            content={<AddBtn text={"Add Class"} />}
            className={
              "bg-[#132985] w-[12rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-white cursor-pointer"
            }
          />
        </div>

        <h2 className="text-2xl mt-4 font-bold text-[#1e1e1e]">Class List</h2>

        <div className="w-[30%]">
          <MembersList data={classData} people={"Teachers"} title={false} />
        </div>
      </main>
    </section>

  )
}

import {
  AddBtn,
  AdminIcon,
  BackIcon,
  MembersList,
} from "../../../../../components"
import { Button } from "../../../../../components/button"
import { classData } from "../../../../../testData"

export const AdminClassesList = () => {
  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main className="grid gap-3">
        <div className="flex justify-between pb-10">
          <div className="flex items-end">
            <BackIcon link={"/admin/academics"} />
          </div>
          <AdminIcon />
        </div>
        <div className="flex flex-col gap-8 px-2">
          <Button
            link={"/admin/academics/addClass"}
            content={<AddBtn text={"Add Class"} />}
            className={
              "bg-[#132985] w-[12rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-white cursor-pointer"
            }
          />
          <h2 className="text-2xl mt-2 font-bold text-[#1e1e1e]">Class List</h2>

          <div className="w-[30%]">
            <MembersList data={classData} people={"Teachers"} title={false} />
          </div>
        </div>
      </main>
    </section>
  )
}

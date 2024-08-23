import { FormInput } from "../../../../components"
import { Button } from "../../../../components/button"

export const AdminCreateActivity = () => {
  return (
    <section className="w-full flex px-[6.5rem] bg-[#f4f4f4] pt-20 pb-14 overflow-auto">
      <main className="w-full">
        <h2 className="font-semibold text-3xl text-[#4F4F4F]">Add Activity</h2>
        <form className="grid grid-cols-2  mt-12 gap-y-6 gap-x-12">
          <FormInput title="Activity" />
          <FormInput title="Description" />
          <FormInput title="Start Date" />
          <FormInput title="End Date" />
          <div className="col-span-2 flex gap-6">
            <Button
              content={"Save"}
              className={
                "bg-[#132985] w-[6.33rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-white cursor-pointer"
              }
            />
            <Button
              link={"/admin/academics/events"}
              content={"Cancel"}
              className={
                "bg-[#D0D4E7] w-[6.33rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-[#132985] cursor-pointer"
              }
            />
          </div>
        </form>
      </main>
    </section>
  )
}
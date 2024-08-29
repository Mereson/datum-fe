import { AdminIcon, BackIcon } from "../../../../components"

export const AdminSchemeOfWork = () => {
  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <div className="flex justify-between pb-14">
        <div className="flex items-end">
          <BackIcon link={"/admin/academics"} />
        </div>
        <AdminIcon />
      </div>
    </section>
  )
}
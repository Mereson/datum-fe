import { AdminIcon, CustomSelect, SearchBox } from "../../../components"

export const AdminParentsList = () => {
  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main className="grid gap-4">
        <AdminIcon />

        <div className="flex justify-between">
          <SearchBox width="w-[20rem] xl:w-[25rem]" placeholder="Search" />
          <div className="flex gap-3 items-center">
            <p className="font-bold text-[#444444]">Filter by:</p>
            <CustomSelect
              index={1}
              query={"Class"}
              width={"6.8rem"}
              options={[]}
            />
            <CustomSelect
              index={2}
              query={"Gender"}
              width={"6.8rem"}
              options={[]}
            />
            <CustomSelect
              index={3}
              query={"Sort by"}
              width={"6.8rem"}
              options={[]}
            />
          </div>
        </div>

        <h2 className="text-2xl mt-4 font-bold text-[#1e1e1e]">Parents List</h2>

        <p className=" text-[#6270AE] pb-4">Nothing to display</p>
      </main>
    </section>
  )
}

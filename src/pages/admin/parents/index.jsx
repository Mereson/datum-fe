import React from "react"
import { AdminProfileImg } from "../../../assets"
import { CustomSelect, SearchBox } from "../../../components"

export const AdminParentsList = () => {
  return (
    <section className="w-full h-full sm:px-[5rem] px-4 bg-[#f4f4f4] pt-8 overflow-auto">
      <main className="grid gap-4">
        <div className="sm:flex sm:flex-col">
          <div className="flex gap-5 items-center justify-end">
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
        </div>
        <div className="sm:flex sm:justify-between">
          <SearchBox width="w- xl:w-[25rem]" placeholder="Search" />
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

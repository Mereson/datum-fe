import { SbSearch } from "../../../assets"

export const StudentsDashboard = () => {
  return (
    <section className="flex overflow-auto w-[100%] h-[100%] bg-[#f4f4f4] justify-between">
      <section className="pr-[75px] pl-[86px] col-span-3 grid grid-cols-2 gap-3 w-[71%]">
        <div className="col-span-2 flex mt-8 mb-8 border border-[#bfbfbf] h-12 rounded-lg">
          <i className="p-4 bg-[#ededed] rounded-l-lg">
            <SbSearch />
          </i>
          <input
            className="h-[100%] w-[100%] font-normal text-sm rounded-r-lg px-3"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="col-span-2 mb-8 bg-[#132985] w-[634px] h-[147px] rounded-2xl">
          Haa
        </div>
        <div className=" bg-[#fafafa] h-[309px] rounded-2xl">Haa</div>
        <div className=" bg-[#fafafa] h-[309px] rounded-2xl">Haa</div>
        <div className="col-span-2 mt-6 bg-[#fafafa] h-[292px] rounded-2xl">
          Haa
        </div>
      </section>
      <section className="bg-[#ffff] w-[29%] ">
        <div className="bg-[#ffff] px-3 pb-10">
          <div className="h-[174px] mt-4 mb-7">hey</div>
          <div className="h-[408px] bg-[#ffffff] border border-[#ededed] rounded-2xl"></div>
          <div className="h-[318px] bg-[#ffffff] mt-5 border border-[#ededed] rounded-2xl"></div>
        </div>
      </section>
    </section>
  )
}

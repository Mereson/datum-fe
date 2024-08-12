import { SbSearch } from "../../../../assets"

export const SearchBox = () => {
  return (
    <div className="col-span-2 flex mt-8 mb-8 border border-[#bfbfbf] h-12 rounded-lg">
      <i className="p-4 bg-[#ededed] rounded-l-lg cursor-pointer">
        <SbSearch />
      </i>
      <input
        className="h-[100%] w-[100%] font-normal text-sm rounded-r-lg px-3"
        type="text"
        placeholder="Search"
      />
    </div>
  )
}

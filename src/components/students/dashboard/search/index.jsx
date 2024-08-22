import { SbSearch } from "../../../../assets"

export const SearchBox = ({ width = "w-[100%]", placeholder = "Search" }) => {
  return (
    <div className="col-span-2 flex mt-8 mb-8 border border-[#bfbfbf] h-12 rounded-lg">
      <i className="p-4 bg-[#ededed] rounded-l-lg cursor-pointer">
        <SbSearch />
      </i>
      <input
        className={`h-[100%] ${width} font-normal text-sm rounded-r-lg px-3`}
        type="text"
        placeholder={placeholder}
      />
    </div>
  )
}

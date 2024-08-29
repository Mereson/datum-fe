import PropTypes from "prop-types"
import { SbSearch } from "../assets"

const Filters = ({ columnFilters, setColumnFilters }) => {
  const filterName = columnFilters.find((f) => f.id === "S/N" || "Surname")?.value || ""
  const onFilterChange = (id, value) =>
    setColumnFilters((prev) =>
      prev.filter((f) => f.id !== id).concat({ id, value })
    )
  return (
    <div>
      <div
        className={`w-[40%] col-span-2 flex mt-8 mb-8 border border-[#bfbfbf] h-12 rounded-lg`}
      >
        <i className="p-4 bg-[#ededed] rounded-l-lg cursor-pointer">
          <SbSearch />
        </i>
        <input
          className={`h-[100%] w-full font-normal text-sm rounded-r-lg px-3`}
          type="text"
          placeholder="Hello there"
          value={filterName}
          onChange={(e) => onFilterChange("S/N", e.target.value)}
        />
      </div>
    </div>
  )
}

Filters.propTypes = {
  columnFilters: PropTypes.array,
  setColumnFilters: PropTypes.func,
}

export default Filters

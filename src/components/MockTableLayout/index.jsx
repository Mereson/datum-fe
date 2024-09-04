import PropTypes from "prop-types"
import { SearchBox } from "../students"

export const MockTableLayout = ({ title, isLoading }) => {
  return (
    <section className="grid gap-4 w-full">
      <div className="flex justify-between items-center">
        <div className="w-[50%]">
          <SearchBox />
        </div>
        <div className="flex gap-5">
          <select className="p-[0.4rem] rounded" name="Class" id="">
            <option value="">Class</option>
            <option value="">JSS 1</option>
            <option value="">JSS 2</option>
            <option value="">JSS 3</option>
          </select>
          <select className="p-[0.4rem] rounded" name="Class" id="">
            <option value="">Gender</option>
            <option value="JSS1">Male</option>
            <option value="JSS1">Female</option>
          </select>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-[#1e1e1e]">{title}</h2>
      {isLoading ? (
        <p className=" text-[#6270AE] pb-4">Loading...</p>
      ) : (
        <p className=" text-[#6270AE] pb-4">Nothing to display</p>
      )}
    </section>
  )
}

MockTableLayout.propTypes = {
  title: PropTypes.string,
  isLoading: PropTypes.bool,
}

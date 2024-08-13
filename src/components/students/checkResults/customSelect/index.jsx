import PropTypes from "prop-types"
import { useSelectStore } from "../../../../store"

export const CustomSelect = ({ query, options, index }) => {
  const { openSelectIndex, setOpenSelectIndex, closeSelect } = useSelectStore()
  const isOpen = openSelectIndex === index

  const handleSelect = (option) => {
    console.log(option)
    closeSelect()
  }

  return (
    <div className="relative w-[500px]">
      <div
        onClick={() => setOpenSelectIndex(index)}
        className="w-full px-[16px] py-[13px] bg-[#ececec] rounded-lg text-sm text-[#bfbfbf] cursor-pointer"
      >
        {query}
      </div>

      {isOpen && (
        <ul className="absolute w-full bg-white z-10 shadow-lg rounded-b-lg max-h-[156px] overflow-y-auto">
          {options.map((option, i) => (
            <li
              key={i}
              onClick={() => handleSelect(option)}
              className="px-[16px] py-[13px] cursor-pointer hover:bg-[#ececec] text-black"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

CustomSelect.propTypes = {
  query: PropTypes.string,
  options: PropTypes.array,
  index: PropTypes.number.isRequired,
}

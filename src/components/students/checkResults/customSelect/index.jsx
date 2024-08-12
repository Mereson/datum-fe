import PropTypes from "prop-types"
import { useState } from "react"

export const CustomSelect = ({ query, options }) => {
  const [selected, setSelected] = useState(query)
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (option) => {
    setSelected(option)
    setIsOpen(false)
  }

  return (
    <div className="relative w-[500px]">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-[16px] py-[13px] bg-[#ececec] rounded-lg text-sm text-[#bfbfbf] cursor-pointer"
      >
        {selected}
      </div>

      {isOpen && (
        <ul className="absolute w-full bg-white z-10 shadow-lg rounded-b-lg">
          {options.map((option, index) => (
            <li
              key={index}
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
}

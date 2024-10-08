import PropTypes from "prop-types"
import { useSelectStore } from "../../../../store"
import styles from "./style.module.css"
import { useState } from "react"
import { DropdownIcon } from "../../../../assets"

export const CustomSelect = ({
  query,
  options,
  index,
  width,
  padding = "px-[12px] py-[10px] xl:px-[16px] xl:py-[13px]",
  dropDownName,
  setForm,
  componentIndex,
}) => {
  const { openSelectIndex, setOpenSelectIndex, closeSelect } = useSelectStore()
  const isOpen = openSelectIndex === index
  const [selectedOption, setSelectedOption] = useState(query) // State to store the selected option

  const handleSelect = (option) => {
    const capitalizedOption = option.charAt(0).toUpperCase() + option.slice(1);

    setSelectedOption(capitalizedOption)
    setForm(componentIndex, dropDownName, capitalizedOption)

    closeSelect()
  }

  return (
    <div className={`relative ${width}`}>
      <div
        onClick={() => setOpenSelectIndex(index)}
        className={`${padding} w-full flex items-center gap-1 justify-between font-semibold  h-10 bg-[#ECECEC] rounded-lg text-[12px] xl:text-[13px] text-[#444444] cursor-pointer`}
      >
        {selectedOption}
        <DropdownIcon isOpen={isOpen} />
      </div>

      {isOpen && (
        <ul
          className={`${styles.scrollbar} absolute w-full text-[12px] xl:text-[13px] bg-white z-10 shadow-lg rounded-b-lg max-h-[156px] overflow-y-auto`}
        >
          {options.map((option, i) => (
            <li
              key={i}
              onClick={() => handleSelect(option)}
              className={`${padding} cursor-pointer hover:bg-[#ececec] text-black`}
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
  width: PropTypes.string,
  query: PropTypes.string,
  options: PropTypes.array,
  index: PropTypes.number.isRequired,
  padding: PropTypes.string,
  dropDownName: PropTypes.string,
  setForm: PropTypes.func,
  componentIndex: PropTypes.number,
}

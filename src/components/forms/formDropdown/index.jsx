import PropTypes from "prop-types"
import { useField } from "formik";
import { useState } from "react";
import styles from "./style.module.css"
import { DropdownIcon } from "../../../assets";

export const FormDropdown = ({ label, name, options, required = false }) => {
  const [field, meta, helpers] = useField(name);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    helpers.setValue(option);
    setIsOpen(false);
  };

  const padding = "px-[12px] py-[10px] xl:px-[16px] xl:py-[13px]"

  return (
    <div className="grid">
      <label className="text-[#444] pb-1" htmlFor={name}>{label}</label>
      <div className="relative">
        <div
          className={`${padding} w-full flex items-center gap-1 justify-between border-[0.5px] border-[#a7a7a7] h-11 bg-[#f4f4f4] rounded-lg text-[12px] xl:text-sm text-[#585858] cursor-pointer ${required && meta.touched && meta.error && "border-red-500"}`}
          onClick={toggleDropdown}
        >
          {field.value || 'Select an option'}
          <DropdownIcon isOpen={isOpen} />
        </div>
        {isOpen && (
          <ul
            className={`${styles.scrollbar} absolute w-full bg-white z-10 shadow-lg rounded-b-lg max-h-[156px] overflow-y-auto`}
          >
            {options.map((option, index) => (
              <li
                key={index}
                className={`${padding} cursor-pointer hover:bg-[#ececec] text-black`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
        {required && meta.touched && meta.error && (
          <div className="text-[13px] text-red-900">{meta.error}</div>
        )}
      </div>
    </div>
  );
};

FormDropdown.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  required: PropTypes.bool,
}
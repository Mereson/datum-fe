import PropTypes from "prop-types"
import { CustomSelect } from "../customSelect"

export const Dropdown = ({ id, name, query, items, width, dropDownName, componentIndex, setForm }) => {
  return (
    <div>
      <p className="pb-1 text-[#444444]">{name}</p>
      <CustomSelect query={query} options={items} index={id} width={width} dropDownName={dropDownName} componentIndex={componentIndex} setForm={setForm} />
    </div>
  )
}

Dropdown.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  query: PropTypes.string,
  width: PropTypes.string,
  items: PropTypes.array,
  dropDownName: PropTypes.string,
  setForm: PropTypes.func,
  componentIndex: PropTypes.number
}

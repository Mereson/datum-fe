import PropTypes from "prop-types"
import { CustomSelect } from "../customSelect"

export const Dropdown = ({ id, name, query, items, width = "w-[500px]" }) => {
  return (
    <div>
      <p className="pb-1 font-bold text-[#444444]">{name}</p>
      <CustomSelect query={query} options={items} index={id} width={width} />
    </div>
  )
}

Dropdown.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    query: PropTypes.string,
    width: PropTypes.string,
    items: PropTypes.array,
}
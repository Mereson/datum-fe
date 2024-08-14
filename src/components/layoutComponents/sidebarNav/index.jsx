import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

export const SidebarNavItem = ({ to, Icon, label }) => {
  return (
    <NavLink to={to} className={() => `flex items-center gap-[10px] group `}>
      {({ isActive }) => (
        <>
          <i
            className={`px-[9px] py-[7px] rounded-lg ${
              isActive
                ? "bg-[#132985]"
                : `bg-[#efefef] group-hover:bg-[#132a85ec] transition-colors duration-200`
            }`}
          >
            <Icon color={isActive ? "#FFFFFF" : "#8A8A8A"} />
          </i>
          <p
            className={`font-bold text-[15px] ${
              isActive
                ? "text-[#132985]"
                : `text-[#8a8a8a] group-hover:text-[#132a85ec] transition-colors duration-200`
            }`}
          >
            {label}
          </p>
        </>
      )}
    </NavLink>
  )
}

SidebarNavItem.propTypes = {
  to: PropTypes.string.isRequired,
  Icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

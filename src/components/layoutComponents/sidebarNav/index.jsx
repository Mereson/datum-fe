import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

export const SidebarNavItem = ({ to, Icon, label }) => {

  const duration = "duration-100"
  return (
    <NavLink to={to} className={() => `rounded-l-full gap-[10px] group `}>
      {({ isActive }) => (

        <NavLinkItem isActive={isActive} duration={duration}>
          <div className={`flex items-center py-1 pl-6 rounded-l-full transition-all ${duration} ease-in-out ${isActive ? "bg-[#F4F4F4]" : "bg-[#132985]"} `} >
            <figure
              className={`px-[9px] py-[7px] flex items-center transition-all ${duration} ease-in-out`}
            >
              <Icon color={isActive ? "#132985" : "#F4F4F4"} />
            </figure>
            <p
              className={`font-medium text-[15px] text-center transition-all ${duration} ${isActive
                ? "text-[#132985]"
                : `text-[#F4F4F4] group-hover:text-[#a6adcfec] transition-colors duration-200`
                }`}
            >
              {label}
            </p>
          </div>
        </NavLinkItem>
      )}

    </NavLink>
  )
}


const NavLinkItem = ({ children, isActive, duration }) => {
  return (
    <>
      <div className={`ml-9 transition-all ${duration} ease-in-out ${isActive ? "bg-[#F4F4F4]" : "bg-[#132985]"}`}>
        <div class="h-3 bg-[#132985] rounded-br-full"></div>
      </div>
      {children}
      <div className={`ml-9 transition-all ${duration} ease-in-out ${isActive ? "bg-[#F4F4F4]" : "bg-[#132985]"}`}>
        <div class="h-3 bg-[#132985] rounded-tr-full"></div>
      </div>
    </>
  )
}

SidebarNavItem.propTypes = {
  to: PropTypes.string.isRequired,
  Icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

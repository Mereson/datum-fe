import PropTypes from "prop-types"

export const LogOutNavItem = ({ to, Icon, label, onClick }) => {
  const duration = "duration-100"
  return (
    <div
      onClick={onClick}
      to={to}
      className={`rounded-l-full gap-[10px] group cursor-pointer `}
    >
      <div
        className={`flex items-center py-[3.7px] pl-6 mx-6 sm:mx-0 rounded-full sm:rounded-none sm:rounded-l-3xl transition-all ${duration} ease-in-out bg-[#132985]`}
      >
        <figure
          className={`px-[9px] py-[6px] flex items-center transition-all ${duration} ease-in-out`}
        >
          <Icon color={"#F4F4F4"} />
        </figure>
        <p
          className={`font-medium text-[13px] text-center transition-all ${duration} text-[#F4F4F4] group-hover:text-[#a6adcfec] transition-colors duration-200`}
        >
          {label}
        </p>
      </div>
    </div>
  )
}

LogOutNavItem.propTypes = {
  to: PropTypes.string.isRequired,
  Icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.string.func,
}

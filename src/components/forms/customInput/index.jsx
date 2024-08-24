import PropTypes from "prop-types"
import { useField } from "formik";

export const CustomInput = ({ label, required = false, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="grid">
      <label className="text-[#444] pb-1" htmlFor={props.id || props.name}>{label}</label>
      <input className={`h-11 rounded-lg border-[0.5px] border-[#a7a7a7] px-2 bg-[#f4f4f4] ${required && meta.touched && meta.error && "border-red-500"}`}
        {...field} {...props} />
      {required && meta.touched && meta.error && (
        <div className="text-[13px] text-red-900">{meta.error}</div>
      )}
    </div>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,              
  type: PropTypes.string,            
  placeholder: PropTypes.string,  
};

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  showPasswordToggle = false,
  required = false,
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');

  const handleInputChange = e => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <input type={type} className='form-control' id='email' placeholder='Email address' required />
    // <div className={`relative bg-white border border-[#1d2856] rounded-[5px] h-[78px] w-[485px] shadow-[0_0_11px_rgba(0,0,0,0.15)] flex items-center px-6 ${className}`}>
    //   {/* Icon */}
    //   {icon && (
    //     <img
    //       src={icon}
    //       alt="input icon"
    //       className="h-[38px] w-[38px] mr-4"
    //     />
    //   )}

    //   {/* Vertical Line */}
    //   <div className="bg-[#d9d9d9] w-[2px] h-[39px] mr-6"></div>

    //   {/* Input Field */}
    //   <input
    //     type={inputType}
    //     placeholder={placeholder}
    //     value={inputValue}
    //     onChange={handleInputChange}
    //     required={required}
    //     className="flex-1 text-[21px] font-light text-[#9c9c9c] font-montserrat bg-transparent border-none outline-none placeholder-[#9c9c9c]"
    //     {...props}
    //   />

    //   {/* Password Toggle */}
    //   {showPasswordToggle && type === 'password' && (
    //     <button
    //       type="button"
    //       onClick={togglePasswordVisibility}
    //       className="ml-4"
    //     >
    //       <img
    //         src="/images/img_view.svg"
    //         alt="toggle password visibility"
    //         className="h-[32px] w-[32px]"
    //       />
    //     </button>
    //   )}

    //   {/* Info Icon */}
    //   {type === 'password' && !showPasswordToggle && (
    //     <img
    //       src="/images/img_infofill.svg"
    //       alt="info"
    //       className="h-[32px] w-[32px] ml-4"
    //     />
    //   )}
    // </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.string,
  showPasswordToggle: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default InputField;

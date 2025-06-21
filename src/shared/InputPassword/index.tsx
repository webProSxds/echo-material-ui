import { useState } from "react";

type props = {
  className: string;
  handler?: any;
  id:string;
  placeholder:string;
  type?:string;
  showEye?:boolean;
  required?:boolean;
};
const InputPassword = ({
  handler,
  id,
  placeholder,
  type,
  showEye=false,
  required=false,
}: props) => {
  const [showPassword, updatePassword] = useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className='password-container'>
      <input
        type={inputType}
        className="form-control"
        id={id}
        placeholder={placeholder}
        required={required}
        onChange={(e)=>handler(e.target.value)}
      />
     {showEye &&  <span className='password-toggle' id='togglePassword' onClick={()=>updatePassword(!showPassword)}>
        <i className='far fa-eye'></i>
      </span>}
    </div>
  );
};
export { InputPassword };

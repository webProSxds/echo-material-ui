import { useState } from "react";

type props = {
  className: string;
  handler?: any;
  id:string;
  placeholder:string;

};
const InputPassword = ({
  handler,
  id,
  placeholder,
}: props) => {
  const [showPassword, updatePassword] = useState(false)
  return (
    <div className='password-container'>
      <input
        type={showPassword?'text':'password'}
        className="form-control"
        id={id}
        placeholder={placeholder}
        required
        onChange={(e)=>handler(e.target.value)}
      />
      <span className='password-toggle' id='togglePassword' onClick={()=>updatePassword(!showPassword)}>
        <i className='far fa-eye'></i>
      </span>
    </div>
  );
};
export { InputPassword };

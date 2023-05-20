import PropTypes from "prop-types";
import { Children } from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`border-[1px] rounded-2xl py-5 ${className}`}
      onClick={onClick}
    >
      <p className="flex font-black text-xl leading-[1.2]">{children}</p>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;

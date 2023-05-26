import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ children, onClick, className }) => {
  return (
    <Link
      className={`inline-block border-[1px] rounded-2xl py-5 ${className}`}
      onClick={onClick}
      to="/pricing"
    >
      <p className="flex font-black text-xl leading-[1.2]">{children}</p>
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
};

export default Button;

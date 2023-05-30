import { motion } from "framer-motion";
import PropTypes from "prop-types";

function DropdownOption({ options, onChange, data, checkIcon }) {
  return (
    <div>
      {options.map(({ id, value, label }) => (
        <li
          className="pl-10 pr-8 py-2 cursor-pointer hover:bg-black-200"
          key={`checkbox-${id}`}
        >
          <button
            className="w-full flex justify-between items-center"
            onClick={() => {
              onChange(value);
            }}
          >
            {label}
            {checkIcon && data.includes(value) && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden material-symbols-outlined"
              >
                done
              </motion.span>
            )}
          </button>
        </li>
      ))}
    </div>
  );
}

DropdownOption.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  checkIcon: PropTypes.bool.isRequired,
};

export default DropdownOption;

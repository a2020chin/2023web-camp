import { motion } from "framer-motion";
import PropTypes from "prop-types";

function DropdownOption({ options, onChange, data, checkIcon }) {
  return (
    <div>
      {options.map(({ id, value, label, name }) => (
        <li key={`checkbox-${id}`}>
          <input
            type="checkbox"
            name={name}
            value={value}
            id={id}
            checked={data.includes(value)}
            onChange={onChange}
            className="sr-only"
          />
          <label
            className="pl-10 pr-8 py-2 flex justify-between items-center cursor-pointer hover:bg-black-200"
            htmlFor={id}
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
          </label>
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

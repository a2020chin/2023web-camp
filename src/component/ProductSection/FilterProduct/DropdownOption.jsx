import PropTypes from "prop-types";

import { useTransition, animated } from "@react-spring/web";

function DropdownOption({ options, onChange, data, checkIcon }) {
  const transitions = useTransition(data, {
    key: data,
    from: { opacity: 0, transform: "scale(0.8)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.8)" },
  });

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
            {checkIcon &&
              transitions(
                (style, item) =>
                  item.includes(value) && (
                    <animated.div
                      className="overflow-hidden material-symbols-outlined"
                      style={style}
                    >
                      done
                    </animated.div>
                  )
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
  data: PropTypes.arrayOf(PropTypes.string.isRequired),
  onChange: PropTypes.func.isRequired,
  checkIcon: PropTypes.bool.isRequired,
};

export default DropdownOption;

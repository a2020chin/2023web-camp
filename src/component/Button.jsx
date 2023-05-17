import PropTypes from 'prop-types';

const Button = ({ text, onClick, className }) => {
  return (
    <button className={`border-[1px] rounded-2xl py-5 px-10 ${className}`} onClick={onClick}>
      <p className='font-black text-xl leading-[1.2]'>{text}</p>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button
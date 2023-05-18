import deco from '@/assets/deco.png';

import PropTypes from 'prop-types';


const MotionIcon = ({className}) => {
  return (
    <div className={`flex w-full justify-end ${className}`}>
      <img src={deco} alt="" />
      <img src={deco} alt="" />
      <img src={deco} alt="" />
    </div>
  );
}
MotionIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default MotionIcon;
import { motion } from "framer-motion";

import PropTypes from "prop-types";

import deco from "../assets/deco.png";

const MotionIcon = ({ className }) => {
  return (
    <motion.div
      className={`flex overflow-hidden ${className}`}
      transition={{ staggerChildren: 3 }}
    >
      <motion.img
        initial={{ y: "-100%", transition: { duration: 1 } }}
        animate={{ y: "100%", transition: { duration: 1 } }}
        transition={{ duration: 3 }}
        src={deco}
        alt=""
      />
      <motion.img
        initial={{ y: "-100%", transition: { duration: 1 } }}
        animate={{ y: "100%", transition: { duration: 1 } }}
        transition={{ duration: 3 }}
        src={deco}
        alt=""
      />
      <motion.img
        initial={{ y: "-100%", transition: { duration: 1 } }}
        animate={{ y: "100%", transition: { duration: 1 } }}
        transition={{ duration: 3 }}
        src={deco}
        alt=""
      />
    </motion.div>
  );
};
MotionIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default MotionIcon;

import PropTypes from "prop-types";
import { motion } from "framer-motion";

import deco from "../assets/deco.png";

const MotionIcon = ({ className }) => {
  return (
    <div className={`flex flex-row-reverse overflow-hidden ${className}`}>
      {[0, 1, 2].map((item, index) => (
        <motion.img
          key={item}
          className="w-[117px] h-[117px] md:w-[180px] md:h-[180px]"
          src={deco}
          alt="deco"
          initial={{ y: "100%" }}
          animate={{
            y: ["100%", "100%", "0%", "0%", "-100%", "-100%"],
            transition: {
              repeat: Infinity,
              duration: 3,
              delay: index * 0.2,
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  );
};
MotionIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default MotionIcon;

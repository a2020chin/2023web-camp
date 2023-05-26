import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import PropTypes from "prop-types";

import deco from "../assets/deco.png";

const MotionIcon = ({ className }) => {
  const imageAnimations = [useAnimation(), useAnimation(), useAnimation()];

  useEffect(() => {
    const sequenceAnimation = async () => {
      await Promise.all(
        imageAnimations.map((animation, index) =>
          animation.start({
            y: "0%",
            transition: { duration: 1, delay: index * 0.5 },
          })
        )
      );

      await Promise.all(
        imageAnimations.map((animation) =>
          animation.start({ y: "0%", transition: { duration: 0.3 } })
        )
      );

      await Promise.all(
        imageAnimations.map((animation, index) =>
          animation.start({
            y: "-100%",
            transition: { duration: 1, delay: index * 0.5 },
          })
        )
      );

      await Promise.all(
        imageAnimations.map((animation) =>
          animation.start({ y: "-100%", transition: { duration: 0.3 } })
        )
      );

      await Promise.all(
        imageAnimations.map((animation) =>
          animation.start({ y: "100%", transition: { duration: 0 } })
        )
      );

      sequenceAnimation();
    };

    sequenceAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`flex flex-row-reverse overflow-hidden ${className}`}>
      {imageAnimations.map((animation, index) => (
        <motion.img
          key={index}
          className="w-[117px] h-[117px] md:w-[180px] md:h-[180px]"
          src={deco}
          alt="deco"
          initial={{ y: "100%" }}
          animate={animation}
        />
      ))}
    </div>
  );
};
MotionIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default MotionIcon;

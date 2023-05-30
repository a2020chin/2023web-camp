import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const NavVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ isOpen, toggleOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute w-[100svw] h-[100svh] left-0 top-0 -z-10 flex flex-col"
          variants={variants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <ul className="m-auto">
            <motion.li
              variants={NavVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className="text-display03 font-black"
                onClick={() => toggleOpen()}
                to="/"
              >
                首頁
              </Link>
            </motion.li>
            <motion.li
              variants={NavVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className="text-display03 font-black"
                onClick={() => toggleOpen()}
                to="/pricing"
              >
                定價
              </Link>
            </motion.li>
          </ul>
          <div className="container">
            <motion.div variants={NavVariants} className="border-t-[1px] py-5">
              <motion.p variants={NavVariants} className="mb-9">
                AI工具王 © 2023
              </motion.p>
              <nav className="w-full">
                <motion.ul className="flex gap-5">
                  <motion.li variants={NavVariants}>Facebook</motion.li>
                  <motion.li variants={NavVariants}>Twitter</motion.li>
                  <motion.li variants={NavVariants}>Instagram</motion.li>
                </motion.ul>
              </nav>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MenuItem.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

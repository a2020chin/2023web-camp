import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MenuItem } from "./MenuItem";

const sidebar = {
  open: {
    clipPath: `circle(200% at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 25,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(0% at 100% 0)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      className="flex items-center md:hidden"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className="absolute w-[100vw] h-[100svh] bg-black-1000 -z-10 top-0 right-0"
        variants={sidebar}
      />

      <MenuItem isOpen={isOpen} toggleOpen={toggleOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default Menu;

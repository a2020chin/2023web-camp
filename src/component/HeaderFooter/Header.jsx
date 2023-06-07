import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useFilterProduct } from "../Context";
import Menu from "./Menu";

const Header = () => {
  const { setShowHeader } = useFilterProduct();

  return (
    <AnimatePresence>
      <div className="sticky top-0 backdrop-blur-md z-50">
        <div className="container ">
          <motion.div
            className="flex justify-between items-center pt-5 pb-[19px] border-b-[1px]"
            initial={{ y: -100 }}
            animate={{
              y: 0,
              transition: {
                type: "spring",
                damping: 12,
              },
            }}
            onAnimationComplete={() => setShowHeader((value) => !value)}
          >
            <h1>
              <Link to="/">
                <span className="sr-only">AI工具王</span>
                <img
                  src={Logo}
                  className="w-[147px] h-6 md:w-[245px] md:h-10"
                  alt="logo"
                />
              </Link>
            </h1>
            <ul className="hidden gap-5 md:flex">
              <li>
                <Link to="/">首頁</Link>
              </li>
              <li>
                <Link to="/pricing">定價</Link>
              </li>
            </ul>
            <Menu />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Header;

import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimeParameter } from "../Context";

const Header = () => {
  const { setShowHeader } = useAnimeParameter();
  return (
    <AnimatePresence>
      <div className="container sticky top-0 backdrop-blur-md z-50">
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
          <img src={Logo} className="w-[245px] h-10" alt="logo" />
          <div className="hidden gap-5 lg:flex">
            <Link to="/">首頁</Link>
            <Link to="/pricing">定價</Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Header;

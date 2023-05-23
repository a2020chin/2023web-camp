import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="container sticky top-0 backdrop-blur-md z-50">
      <div className="flex justify-between items-center pt-5 pb-[19px] border-b-[1px] ">
        <img src={Logo} className="w-[245px] h-10" alt="logo" />
        <div className="flex gap-5">
          <Link to="/">首頁</Link>
          <Link to="/pricing">定價</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
